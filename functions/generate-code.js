#!/usr/bin/env node

const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const courses = {
    'ingles-7-dias': { prefix: 'ING', name: 'Inglés 7 Días' },
    'community-manager': { prefix: 'CM', name: 'Community Manager' },
    'marketing-digital': { prefix: 'MK', name: 'Marketing Digital' },
    'ecommerce': { prefix: 'EC', name: 'E-commerce' }
};

function generateRandom(len = 4) {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let result = '';
    for (let i = 0; i < len; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

async function generateCode(courseId, clientName) {
    if (!clientName) {
        console.error('\n❌ Necesitás escribir el nombre del cliente.');
        console.log('\nUso: node generate-code.js <curso> <nombre>\n');
        console.log('Ejemplo: node generate-code.js ingles-7-dias Maria\n');
        process.exit(1);
    }

    if (!courses[courseId]) {
        console.error('\n❌ Curso no válido.\n');
        console.log('Cursos disponibles:\n');
        Object.entries(courses).forEach(([id, data]) => {
            console.log(`  ${data.prefix.padEnd(4)} → ${data.name} (${id})`);
        });
        console.log('\nUso: node generate-code.js <curso> <nombre>\n');
        process.exit(1);
    }

    const courseInfo = courses[courseId];
    const name = clientName.toUpperCase().replace(/[^A-Z]/g, '').substring(0, 10);
    const random = generateRandom(4);
    const codeString = `${courseInfo.prefix}-${name}-${random}`;

    await db.collection('codes').doc(codeString).set({
        courseId,
        clientName: clientName,
        isActive: true,
        isSingleUse: true,
        type: 'payment',
        createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    console.log(`\n✅ Código generado:`);
    console.log(`\n   ╔═══════════════════════════════╗`);
    console.log(`   ║  ${codeString.padEnd(28)}║`);
    console.log(`   ╚═══════════════════════════════╝`);
    console.log(`   Curso: ${courseInfo.name}`);
    console.log(`   Cliente: ${clientName}`);
    console.log(`\n   📋 Enviale este código al cliente\n`);

    process.exit(0);
}

const courseId = process.argv[2];
const clientName = process.argv[3];

if (!courseId) {
    console.log('\n🎫 Generador de Códigos - Seven App\n');
    console.log('Cursos disponibles:\n');
    Object.entries(courses).forEach(([id, data]) => {
        console.log(`  ${data.prefix.padEnd(4)} → ${data.name} (${id})`);
    });
    console.log('\nUso: node generate-code.js <curso> <nombre>\n');
    console.log('Ejemplo: node generate-code.js ingles-7-dias Maria\n');
    process.exit(0);
}

generateCode(courseId, clientName).catch(err => {
    console.error('Error:', err.message);
    process.exit(1);
});