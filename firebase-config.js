// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRcG-h3RrxixMW0G_eDokDETz2llpAYD8",
    authDomain: "sevenapp-38711.firebaseapp.com",
    projectId: "sevenapp-38711",
    storageBucket: "sevenapp-38711.firebasestorage.app",
    messagingSenderId: "387999323809",
    appId: "1:387999323809:web:811f7956fd7e41a42e02e0",
    measurementId: "G-2PXTXQDWLH"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

async function checkCourseAccess(courseId) {
    const user = firebase.auth().currentUser;
    if (!user) return false;
    
    if (!user.emailVerified) return false;
    
    const doc = await db.collection('users').doc(user.uid).get();
    if (!doc.exists) return false;
    
    const userData = doc.data();
    return userData.courses.includes(courseId);
}

async function getUserData() {
    const user = firebase.auth().currentUser;
    if (!user) return null;
    
    const doc = await db.collection('users').doc(user.uid).get();
    return doc.exists ? doc.data() : null;
}

function isFirebaseConfigured() {
    return firebaseConfig.apiKey !== "TU_API_KEY";
}
