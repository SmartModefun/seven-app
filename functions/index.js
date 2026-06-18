const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

exports.verifyPayPalPayment = functions.https.onRequest(async (req, res) => {
    cors(req, res, async () => {
        if (req.method !== 'POST') {
            return res.status(405).send('Method not allowed');
        }

        try {
            const { paymentId, courseId, userId } = req.body;

            if (!paymentId || !courseId || !userId) {
                return res.status(400).json({ 
                    error: 'Faltan parámetros requeridos' 
                });
            }

            const validCourses = [
                'ingles-7-dias',
                'community-manager', 
                'marketing-digital',
                'ecommerce'
            ];

            if (!validCourses.includes(courseId)) {
                return res.status(400).json({ 
                    error: 'Curso no válido' 
                });
            }

            const userRef = db.collection('users').doc(userId);
            const userDoc = await userRef.get();

            if (!userDoc.exists) {
                return res.status(404).json({ 
                    error: 'Usuario no encontrado' 
                });
            }

            const userData = userDoc.data();
            
            if (userData.courses && userData.courses.includes(courseId)) {
                return res.status(200).json({ 
                    success: true,
                    message: 'Curso ya habilitado',
                    courseId 
                });
            }

            await userRef.update({
                courses: admin.firestore.FieldValue.arrayUnion(courseId),
                [`purchases.${courseId}`]: {
                    paymentId,
                    purchasedAt: admin.firestore.FieldValue.serverTimestamp()
                }
            });

            return res.status(200).json({ 
                success: true,
                message: 'Curso habilitado correctamente',
                courseId 
            });

        } catch (error) {
            console.error('Error verificando pago:', error);
            return res.status(500).json({ 
                error: 'Error interno del servidor' 
            });
        }
    });
});

exports.enableCourse = functions.https.onCall(async (data, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError(
            'unauthenticated',
            'Debes iniciar sesión'
        );
    }

    const { courseId } = data;

    if (!courseId) {
        throw new functions.https.HttpsError(
            'invalid-argument',
            'Course ID es requerido'
        );
    }

    try {
        const userRef = db.collection('users').doc(context.auth.uid);
        
        await userRef.update({
            courses: admin.firestore.FieldValue.arrayUnion(courseId)
        });

        return { 
            success: true, 
            courseId 
        };
    } catch (error) {
        console.error('Error habilitando curso:', error);
        throw new functions.https.HttpsError(
            'internal',
            'Error al habilitar el curso'
        );
    }
});

exports.checkCourseAccess = functions.https.onCall(async (data, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError(
            'unauthenticated',
            'Debes iniciar sesión'
        );
    }

    const { courseId } = data;

    if (!courseId) {
        throw new functions.https.HttpsError(
            'invalid-argument',
            'Course ID es requerido'
        );
    }

    try {
        const userRef = db.collection('users').doc(context.auth.uid);
        const userDoc = await userRef.get();

        if (!userDoc.exists) {
            return { hasAccess: false };
        }

        const userData = userDoc.data();
        const hasAccess = userData.courses && userData.courses.includes(courseId);

        return { hasAccess };
    } catch (error) {
        console.error('Error verificando acceso:', error);
        throw new functions.https.HttpsError(
            'internal',
            'Error al verificar acceso'
        );
    }
});

exports.getUserCourses = functions.https.onCall(async (data, context) => {
    if (!context.auth) {
        throw new functions.https.HttpsError(
            'unauthenticated',
            'Debes iniciar sesión'
        );
    }

    try {
        const userRef = db.collection('users').doc(context.auth.uid);
        const userDoc = await userRef.get();

        if (!userDoc.exists) {
            return { courses: [] };
        }

        const userData = userDoc.data();
        return { 
            courses: userData.courses || [],
            username: userData.username,
            email: userData.email
        };
    } catch (error) {
        console.error('Error obteniendo cursos:', error);
        throw new functions.https.HttpsError(
            'internal',
            'Error al obtener cursos'
        );
    }
});

exports.generateCode = functions.https.onRequest(async (req, res) => {
    cors(req, res, async () => {
        if (req.method !== 'POST') {
            return res.status(405).send('Method not allowed');
        }

        try {
            const { courseId } = req.body;

            const validCourses = {
                'ingles-7-dias': { prefix: 'ING', name: 'Inglés 7 Días' },
                'community-manager': { prefix: 'CM', name: 'Community Manager' },
                'marketing-digital': { prefix: 'MK', name: 'Marketing Digital' },
                'ecommerce': { prefix: 'EC', name: 'E-commerce' }
            };

            if (!courseId || !validCourses[courseId]) {
                return res.status(400).json({ 
                    error: 'Curso no válido. Cursos: ' + Object.keys(validCourses).join(', ') 
                });
            }

            const courseInfo = validCourses[courseId];
            const codesRef = db.collection('codes');
            const existingCodes = await codesRef.where('courseId', '==', courseId).get();
            const count = existingCodes.size + 1;
            const codeString = `${courseInfo.prefix}-${String(count).padStart(3, '0')}`;

            await codesRef.doc(codeString).set({
                courseId,
                isActive: true,
                isSingleUse: true,
                type: 'payment',
                createdAt: admin.firestore.FieldValue.serverTimestamp()
            });

            return res.status(200).json({ 
                success: true,
                code: codeString,
                course: courseInfo.name,
                courseId
            });

        } catch (error) {
            console.error('Error generando código:', error);
            return res.status(500).json({ 
                error: 'Error interno del servidor' 
            });
        }
    });
});
