// Seven App - Generador de Códigos de Acceso
// Uso: node generate-codes.js <curso> <cantidad>
// Ejemplo: node generate-codes.js ingles-7-dias 5

const admin = require('firebase-admin');

const courses = {
    'ingles-7-dias': { prefix: 'ING', name: 'Inglés 7 Días' },
    'community-manager': { prefix: 'CM', name: 'Community Manager' },
    'marketing-digital': { prefix: 'MK', name: 'Marketing Digital' },
    'ecommerce': { prefix: 'EC', name: 'E-commerce' }
};

function generateCode(prefix, index) {
    const num = String(index).padStart(3, '0');
    return `${prefix}-${num}`;
}

async function main() {
    const course = process.argv[2];
    const count = parseInt(process.argv[3]) || 1;

    if (!course || !courses[course]) {
        console.log('\n📚 Cursos disponibles:\n');
        Object.entries(courses).forEach(([id, data]) => {
            console.log(`  ${data.prefix}: ${data.name} (${id})`);
        });
        console.log('\n用法: node generate-codes.js <curso> <cantidad>\n');
        return;
    }

    const courseInfo = courses[course];
    console.log(`\n🎫 Generando códigos para: ${courseInfo.name}\n`);

    for (let i = 1; i <= count; i++) {
        const code = generateCode(courseInfo.prefix, i);
        console.log(`  ${code}`);
    }

    console.log(`\n💡 Copiá estos códigos y crealos en Firebase Console`);
    console.log(`   Link: https://console.firebase.google.com/u/0/project/sevenapp-38711/firestore/databases/-default-/data/~2Fcodes\n`);
}

main().catch(console.error);