// Seven App - Complete English Course
// Based on Ramón Campayo's SRCI Method
// "Aprende un idioma en 7 días"

const courseData = {
    1: {
        title: "Saludos y Presentaciones",
        subtitle: "Greetings & Introductions",
        vocabulary: [
            { word: "Hello", translation: "Hola", pronunciation: "jelou" },
            { word: "Good morning", translation: "Buenos días", pronunciation: "gud morning" },
            { word: "Good afternoon", translation: "Buenas tardes", pronunciation: "gud afturnun" },
            { word: "Good evening", translation: "Buenas noches", pronunciation: "gud ivning" },
            { word: "Goodbye", translation: "Adiós", pronunciation: "gudbai" },
            { word: "See you later", translation: "Nos vemos luego", pronunciation: "si iu leider" },
            { word: "Thank you", translation: "Gracias", pronunciation: "zank iu" },
            { word: "Thanks", translation: "Gracias", pronunciation: "zanks" },
            { word: "Thank you very much", translation: "Muchas gracias", pronunciation: "zank iu veri mach" },
            { word: "Please", translation: "Por favor", pronunciation: "pliz" },
            { word: "Sorry", translation: "Lo siento", pronunciation: "sori" },
            { word: "Excuse me", translation: "Disculpe", pronunciation: "ikskius mi" },
            { word: "Yes", translation: "Sí", pronunciation: "ies" },
            { word: "No", translation: "No", pronunciation: "nou" },
            { word: "My name is...", translation: "Me llamo...", pronunciation: "mai neim iz" }
        ],
        phrases: [
            { phrase: "Hello! How are you?", translation: "¡Hola! ¿Cómo estás?" },
            { phrase: "I'm fine, thank you", translation: "Estoy bien, gracias" },
            { phrase: "Nice to meet you", translation: "Mucho gusto" },
            { phrase: "What's your name?", translation: "¿Cómo te llamas?" },
            { phrase: "Where are you from?", translation: "¿De dónde eres?" },
            { phrase: "I'm from Spain", translation: "Soy de España" },
            { phrase: "See you later", translation: "Nos vemos" },
            { phrase: "Have a nice day", translation: "Que tengas un buen día" }
        ],
        dialogue: {
            title: "Primera Conversación",
            lines: [
                { speaker: "A", text: "Hello! How are you?", translation: "¡Hola! ¿Cómo estás?" },
                { speaker: "B", text: "I'm fine, thank you. And you?", translation: "Estoy bien, gracias. ¿Y tú?" },
                { speaker: "A", text: "Very good, thanks. What's your name?", translation: "Muy bien, gracias. ¿Cómo te llamas?" },
                { speaker: "B", text: "My name is Maria. Nice to meet you!", translation: "¡Me llamo María! ¡Mucho gusto!" }
            ]
        }
    },
    2: {
        title: "Conversación Básica",
        subtitle: "Basic Conversation",
        vocabulary: [
            { word: "How are you?", translation: "¿Cómo estás?", pronunciation: "jau ar iu?" },
            { word: "I'm fine", translation: "Estoy bien", pronunciation: "aim fain" },
            { word: "Very well", translation: "Muy bien", pronunciation: "veri uel" },
            { word: "Not bad", translation: "No está mal", pronunciation: "not bad" },
            { word: "And you?", translation: "¿Y tú?", pronunciation: "and iu?" },
            { word: "Good, thanks", translation: "Bien, gracias", pronunciation: "gud zanks" },
            { word: "How much?", translation: "¿Cuánto?", pronunciation: "jau mach?" },
            { word: "How many?", translation: "¿Cuántos?", pronunciation: "jau meni?" },
            { word: "I don't understand", translation: "No entiendo", pronunciation: "ai dount andestand" },
            { word: "Do you speak Spanish?", translation: "¿Hablas español?", pronunciation: "du iu spik spanish?" },
            { word: "I speak a little English", translation: "Hablo un poco de inglés", pronunciation: "ai spik a litl inglish" },
            { word: "Can you help me?", translation: "¿Puedes ayudarme?", pronunciation: "ken iu help mi?" },
            { word: "I need help", translation: "Necesito ayuda", pronunciation: "ai nid help" },
            { word: "Where is...?", translation: "¿Dónde está...?", pronunciation: "uer iz..." },
            { word: "The bathroom", translation: "El baño", pronunciation: "za bartzrum" }
        ],
        phrases: [
            { phrase: "How much does this cost?", translation: "¿Cuánto cuesta esto?" },
            { phrase: "Where is the hotel?", translation: "¿Dónde está el hotel?" },
            { phrase: "Can you help me please?", translation: "¿Puedes ayudarme por favor?" },
            { phrase: "I don't understand", translation: "No entiendo" },
            { phrase: "Please speak slowly", translation: "Por favor, habla despacio" },
            { phrase: "Do you have...?", translation: "¿Tienes...?" },
            { phrase: "I would like...", translation: "Me gustaría..." }
        ],
        dialogue: {
            title: "En el Hotel",
            lines: [
                { speaker: "Guest", text: "Good morning! Do you have a room available?", translation: "¡Buenos días! ¿Tienen una habitación disponible?" },
                { speaker: "Receptionist", text: "Yes, we have rooms available. For how many nights?", translation: "Sí, tenemos habitaciones. ¿Por cuántas noches?" },
                { speaker: "Guest", text: "For two nights, please.", translation: "Por dos noches, por favor." },
                { speaker: "Receptionist", text: "Perfect. Can I see your passport?", translation: "Perfecto. ¿Puedo ver su pasaporte?" }
            ]
        }
    },
    3: {
        title: "En el Restaurante",
        subtitle: "At the Restaurant",
        vocabulary: [
            { word: "Menu", translation: "Menú", pronunciation: "meniu" },
            { word: "Water", translation: "Agua", pronunciation: "uoter" },
            { word: "Wine", translation: "Vino", pronunciation: "uain" },
            { word: "Beer", translation: "Cerveza", pronunciation: "bier" },
            { word: "Coffee", translation: "Café", pronunciation: "kofi" },
            { word: "The bill", translation: "La cuenta", pronunciation: "za bil" },
            { word: "Breakfast", translation: "Desayuno", pronunciation: "brekfast" },
            { word: "Lunch", translation: "Almuerzo", pronunciation: "lanch" },
            { word: "Dinner", translation: "Cena", pronunciation: "diner" },
            { word: "Waiter", translation: "Camarero", pronunciation: "ueiter" },
            { word: "Table", translation: "Mesa", pronunciation: "teibol" },
            { word: "Reservation", translation: "Reservación", pronunciation: "rezerveishon" },
            { word: "Delicious", translation: "Delicioso", pronunciation: "delishos" },
            { word: "I'm hungry", translation: "Tengo hambre", pronunciation: "aim jagri" },
            { word: "I'm thirsty", translation: "Tengo sed", pronunciation: "aim zirsti" }
        ],
        phrases: [
            { phrase: "A table for two, please", translation: "Una mesa para dos, por favor" },
            { phrase: "The menu, please", translation: "El menú, por favor" },
            { phrase: "What do you recommend?", translation: "¿Qué recomienda?" },
            { phrase: "I'm vegetarian", translation: "Soy vegetariano" },
            { phrase: "The check, please", translation: "La cuenta, por favor" },
            { phrase: "Is service included?", translation: "¿Está incluido el servicio?" },
            { phrase: "It was delicious!", translation: "¡Estaba delicioso!" }
        ],
        dialogue: {
            title: "Pidiendo Comida",
            lines: [
                { speaker: "Waiter", text: "Good evening. Do you have a reservation?", translation: "Buenas noches. ¿Tienen reservación?" },
                { speaker: "Customer", text: "Yes, under the name Garcia.", translation: "Sí, a nombre de García." },
                { speaker: "Waiter", text: "Perfect. Please follow me. Here are your menus.", translation: "Perfecto. Sígame por favor. Aquí tienen los menús." },
                { speaker: "Customer", text: "Thank you. What do you recommend?", translation: "Gracias. ¿Qué recomienda?" }
            ]
        }
    },
    4: {
        title: "En el Hotel",
        subtitle: "At the Hotel",
        vocabulary: [
            { word: "Room", translation: "Habitación", pronunciation: "rum" },
            { word: "Key", translation: "Llave", pronunciation: "ki" },
            { word: "Elevator", translation: "Ascensor", pronunciation: "eliveitor" },
            { word: "Floor", translation: "Piso", pronunciation: "flor" },
            { word: "Luggage", translation: "Equipaje", pronunciation: "laguiy" },
            { word: "Check in", translation: "Registrarse", pronunciation: "chek in" },
            { word: "Check out", translation: "Salir", pronunciation: "chek aut" },
            { word: "Night", translation: "Noche", pronunciation: "nait" },
            { word: "Single room", translation: "Habitación individual", pronunciation: "singl rum" },
            { word: "Double room", translation: "Habitación doble", pronunciation: "dabol rum" },
            { word: "Air conditioning", translation: "Aire acondicionado", pronunciation: "er kondishoning" },
            { word: "WiFi", translation: "WiFi", pronunciation: "uai fai" },
            { word: "Bathroom", translation: "Baño", pronunciation: "bazrum" },
            { word: "Towel", translation: "Toalla", pronunciation: "taual" },
            { word: "Bed", translation: "Cama", pronunciation: "bed" }
        ],
        phrases: [
            { phrase: "I have a reservation", translation: "Tengo una reservación" },
            { phrase: "What time is check-out?", translation: "¿A qué hora es la salida?" },
            { phrase: "Can I have the key?", translation: "¿Puedo tener la llave?" },
            { phrase: "Is breakfast included?", translation: "¿Está incluido el desayuno?" },
            { phrase: "Where is the elevator?", translation: "¿Dónde está el ascensor?" },
            { phrase: "Can I have more towels?", translation: "¿Puedo tener más toallas?" },
            { phrase: "The air conditioning doesn't work", translation: "El aire acondicionado no funciona" }
        ],
        dialogue: {
            title: "Check-in",
            lines: [
                { speaker: "Guest", text: "Hi, I have a reservation for tonight.", translation: "Hola, tengo una reservación para esta noche." },
                { speaker: "Receptionist", text: "May I have your name, please?", translation: "¿Me puede dar su nombre, por favor?" },
                { speaker: "Guest", text: "Yes, it's John Smith.", translation: "Sí, es John Smith." },
                { speaker: "Receptionist", text: "Perfect. A double room for 3 nights. Here's your key, room 305.", translation: "Perfecto. Una habitación doble por 3 noches. Aquí tiene su llave, habitación 305." }
            ]
        }
    },
    5: {
        title: "Transporte",
        subtitle: "Transportation",
        vocabulary: [
            { word: "Taxi", translation: "Taxi", pronunciation: "taksi" },
            { word: "Bus", translation: "Autobús", pronunciation: "bas" },
            { word: "Metro", translation: "Metro", pronunciation: "metrou" },
            { word: "Train", translation: "Tren", pronunciation: "trein" },
            { word: "Airport", translation: "Aeropuerto", pronunciation: "erport" },
            { word: "Station", translation: "Estación", pronunciation: "steishon" },
            { word: "Ticket", translation: "Boleto", pronunciation: "tiket" },
            { word: "Stop", translation: "Parada", pronunciation: "stop" },
            { word: "Left", translation: "Izquierda", pronunciation: "left" },
            { word: "Right", translation: "Derecha", pronunciation: "rait" },
            { word: "Straight", translation: "Recto", pronunciation: "streit" },
            { word: "Near", translation: "Cerca", pronunciation: "niar" },
            { word: "Far", translation: "Lejos", pronunciation: "far" },
            { word: "Turn", translation: "Girar", pronunciation: "tern" },
            { word: "Address", translation: "Dirección", pronunciation: "adres" }
        ],
        phrases: [
            { phrase: "Where is the bus stop?", translation: "¿Dónde está la parada de autobús?" },
            { phrase: "How much is a ticket to...?", translation: "¿Cuánto cuesta un boleto a...?" },
            { phrase: "Turn left/right", translation: "Gire a la izquierda/derecha" },
            { phrase: "Go straight", translation: "Siga recto" },
            { phrase: "How far is it?", translation: "¿Qué tan lejos está?" },
            { phrase: "Please take me to...", translation: "Por favor, lléveme a..." },
            { phrase: "Stop here, please", translation: "Pare aquí, por favor" }
        ],
        dialogue: {
            title: "Tomando un Taxi",
            lines: [
                { speaker: "Tourist", text: "Taxi! Can you take me to the airport?", translation: "¡Taxi! ¿Puede llevarme al aeropuerto?" },
                { speaker: "Driver", text: "Yes, of course. Get in.", translation: "Sí, claro. Suba." },
                { speaker: "Tourist", text: "How long does it take?", translation: "¿Cuánto tiempo tarda?" },
                { speaker: "Driver", text: "About 30 minutes, depending on traffic.", translation: "Acerca de 30 minutos, dependiendo del tráfico." }
            ]
        }
    },
    6: {
        title: "Compras",
        subtitle: "Shopping",
        vocabulary: [
            { word: "Shop", translation: "Tienda", pronunciation: "shop" },
            { word: "Price", translation: "Precio", pronunciation: "prais" },
            { word: "Money", translation: "Dinero", pronunciation: "mani" },
            { word: "Credit card", translation: "Tarjeta de crédito", pronunciation: "kredit kard" },
            { word: "Cash", translation: "Efectivo", pronunciation: "kash" },
            { word: "Size", translation: "Talla", pronunciation: "sais" },
            { word: "Color", translation: "Color", pronunciation: "kolar" },
            { word: "Clothes", translation: "Ropa", pronunciation: "klouz" },
            { word: "Shoes", translation: "Zapatos", pronunciation: "shuz" },
            { word: "Too expensive", translation: "Muy caro", pronunciation: "tu ikspensiv" },
            { word: "Cheap", translation: "Barato", pronunciation: "chip" },
            { word: "Discount", translation: "Descuento", pronunciation: "diskaunt" },
            { word: "Receipt", translation: "Recibo", pronunciation: "risit" },
            { word: "Can I try this on?", translation: "¿Puedo probarme esto?", pronunciation: "ken ai trai zis on?" },
            { word: "Do you have a smaller size?", translation: "¿Tiene una talla más pequeña?" }
        ],
        phrases: [
            { phrase: "How much does this cost?", translation: "¿Cuánto cuesta esto?" },
            { phrase: "Can I pay with card?", translation: "¿Puedo pagar con tarjeta?" },
            { phrase: "That's too expensive", translation: "Es muy caro" },
            { phrase: "Do you have this in another color?", translation: "¿Tiene esto en otro color?" },
            { phrase: "Where is the fitting room?", translation: "¿Dónde está el probador?" },
            { phrase: "I'll take it", translation: "Me lo llevo" },
            { phrase: "Can I have a receipt?", translation: "¿Me puede dar un recibo?" }
        ],
        dialogue: {
            title: "En una Tienda",
            lines: [
                { speaker: "Shopper", text: "Excuse me, how much is this shirt?", translation: "Disculpe, ¿cuánto cuesta esta camisa?" },
                { speaker: "Salesperson", text: "That one is $25.", translation: "Esa cuesta $25." },
                { speaker: "Shopper", text: "Do you have it in a smaller size?", translation: "¿La tiene en una talla más pequeña?" },
                { speaker: "Salesperson", text: "Let me check... Yes, we have a small.", translation: "Déjeme verificar... Sí, tenemos una pequeña." }
            ]
        }
    },
    7: {
        title: "Conversación Real",
        subtitle: "Real Conversation",
        vocabulary: [
            { word: "Friend", translation: "Amigo", pronunciation: "frend" },
            { word: "Family", translation: "Familia", pronunciation: "famli" },
            { word: "Love", translation: "Amor", pronunciation: "lav" },
            { word: "Work", translation: "Trabajo", pronunciation: "uerk" },
            { word: "School", translation: "Escuela", pronunciation: "skul" },
            { word: "Time", translation: "Tiempo", pronunciation: "taim" },
            { word: "Today", translation: "Hoy", pronunciation: "todei" },
            { word: "Tomorrow", translation: "Mañana", pronunciation: "tomorou" },
            { word: "Yesterday", translation: "Ayer", pronunciation: "iesterdei" },
            { word: "Week", translation: "Semana", pronunciation: "uik" },
            { word: "Month", translation: "Mes", pronunciation: "manz" },
            { word: "Year", translation: "Año", pronunciation: "yir" },
            { word: "Holiday", translation: "Vacaciones", pronunciation: "jolidei" },
            { word: "Weather", translation: "Clima", pronunciation: "uezer" },
            { word: "Happy", translation: "Feliz", pronunciation: "japi" }
        ],
        phrases: [
            { phrase: "What time is it?", translation: "¿Qué hora es?" },
            { phrase: "I love this country", translation: "Me encanta este país" },
            { phrase: "Let's meet tomorrow", translation: "Nos vemos mañana" },
            { phrase: "What's the weather like?", translation: "¿Qué tiempo hace?" },
            { phrase: "It's a beautiful day", translation: "Es un día hermoso" },
            { phrase: "I had a great time", translation: "Lo pasé muy bien" },
            { phrase: "See you next week", translation: "Nos vemos la próxima semana" }
        ],
        dialogue: {
            title: "Despedida",
            lines: [
                { speaker: "A", text: "Well, it's getting late. I should go.", translation: "Bueno, se está haciendo tarde. Debería irme." },
                { speaker: "B", text: "No, stay a little longer! It's still early.", translation: "¡No, quédate un poco más! Todavía es temprano." },
                { speaker: "A", text: "I had a great time today. Thank you!", translation: "Lo pasé muy bien hoy. ¡Gracias!" },
                { speaker: "B", text: "Me too! Let's meet again soon.", translation: "¡A mí también! Nos vemos pronto." },
                { speaker: "A", text: "Goodbye! Take care!", translation: "¡Adiós! ¡Cuídate!" },
                { speaker: "B", text: "Goodbye! Have a safe trip!", translation: "¡Adiós! ¡Que tengas un buen viaje!" }
            ]
        }
    }
};

let currentDay = 1;
let currentSection = 'vocabulary';
let currentIndex = 0;

function load() {
    try {
        const savedDay = localStorage.getItem('currentDay');
        if (savedDay) {
            currentDay = parseInt(savedDay);
        } else {
            currentDay = 1;
        }
        
        // Always allow day 1 (free)
        const paid = localStorage.getItem('sevenPaid') === 'true';
        
        if (currentDay > 1 && !paid) {
            showPaywall();
            return;
        }
        
        const dayData = courseData[currentDay];
        if (!dayData) {
            // If day doesn't exist, fallback to day 1
            currentDay = 1;
            localStorage.setItem('currentDay', 1);
        }
        
        const finalDayData = courseData[currentDay];
        if (!finalDayData) {
            console.error('No course data found');
            return;
        }
        
        document.getElementById('lessonDay').innerText = `Día ${currentDay}: ${finalDayData.title}`;
        document.getElementById('daySubtitle').innerText = finalDayData.subtitle;
        
        loadSection('vocabulary');
        updateProgress();
        updateDayButtons();
    } catch(e) {
        console.error('Error in load:', e);
        currentDay = 1;
        document.getElementById('lessonDay').innerText = 'Día 1: Saludos y Presentaciones';
    }
}

function showPaywall() {
    document.querySelector('.course').classList.add('hidden');
    document.getElementById('paywall').classList.remove('hidden');
    document.getElementById('paywall-day').innerText = `Día ${currentDay}`;
}

function hidePaywall() {
    document.querySelector('.course').classList.remove('hidden');
    document.getElementById('paywall').classList.add('hidden');
}

function loadSection(section) {
    currentSection = section;
    currentIndex = 0;
    
    const dayData = courseData[currentDay];
    if (!dayData) return;
    
    const content = dayData[section];
    if (!content || content.length === 0) return;
    
    document.querySelectorAll('.nav-tabs button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-section="${section}"]`).classList.add('active');
    
    showContent();
}

function showContent() {
    const dayData = courseData[currentDay];
    if (!dayData) return;
    
    const content = dayData[currentSection];
    if (!content || !content[currentIndex]) return;
    
    const item = content[currentIndex];
    
    if (currentSection === 'vocabulary') {
        document.getElementById('word').innerText = item.word;
        document.getElementById('translation').innerText = item.translation;
        document.getElementById('pronunciation').innerText = item.pronunciation;
        document.getElementById('pronunciation').style.display = 'block';
    } else if (currentSection === 'phrases') {
        document.getElementById('word').innerText = item.phrase;
        document.getElementById('translation').innerText = item.translation;
        document.getElementById('pronunciation').style.display = 'none';
    }
    
    updateProgress();
    updateCounter();
}

function updateProgress() {
    const dayData = courseData[currentDay];
    if (!dayData) return;
    
    const content = dayData[currentSection];
    if (!content) return;
    
    const progress = ((currentIndex + 1) / content.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
}

function updateCounter() {
    const dayData = courseData[currentDay];
    if (!dayData) return;
    
    const content = dayData[currentSection];
    if (!content) return;
    
    document.getElementById('counter').innerText = `${currentIndex + 1} / ${content.length}`;
}

function updateDayButtons() {
    const buttons = document.querySelectorAll('.day-btn');
    buttons.forEach((btn, index) => {
        const dayNum = index + 1;
        btn.classList.remove('active');
        if (dayNum === currentDay) {
            btn.classList.add('active');
        }
    });
}

function check(i) {
    const dayData = courseData[currentDay];
    if (!dayData) return;
    
    const content = dayData[currentSection];
    if (!content) return;
    
    const item = content[currentIndex];
    
    if (!item.options) {
        document.getElementById('feedback').innerHTML = '<span style="color: #10b981;">✓ Mismo significado - Muy bien!</span>';
        return;
    }
    
    if (i === item.correct) {
        document.getElementById('feedback').innerHTML = '<span style="color: #10b981;">✓ Correcto!</span>';
    } else {
        document.getElementById('feedback').innerHTML = '<span style="color: #ef4444;">✖ Intenta de nuevo</span>';
    }
}

function next() {
    const dayData = courseData[currentDay];
    if (!dayData) return;
    
    const content = dayData[currentSection];
    if (!content) return;
    
    if (currentIndex < content.length - 1) {
        currentIndex++;
        showContent();
    } else {
        if (currentSection === 'vocabulary') {
            loadSection('phrases');
        } else if (currentSection === 'phrases') {
            loadSection('dialogue');
        }
    }
}

function prev() {
    if (currentIndex > 0) {
        currentIndex--;
        showContent();
    } else {
        if (currentSection === 'dialogue') {
            loadSection('phrases');
        } else if (currentSection === 'phrases') {
            loadSection('vocabulary');
        }
    }
}

function playAudio() {
    const dayData = courseData[currentDay];
    if (!dayData) return;
    
    const content = dayData[currentSection];
    if (!content || !content[currentIndex]) return;
    
    let text;
    if (currentSection === 'vocabulary') {
        text = content[currentIndex].word;
    } else if (currentSection === 'phrases') {
        text = content[currentIndex].phrase;
    } else {
        text = content[currentIndex].text;
    }
    
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = 'en-US';
    msg.rate = 0.8;
    speechSynthesis.speak(msg);
}

function goHome() {
    window.location = 'index.html';
}

function changeDay(day) {
    const paid = localStorage.getItem('sevenPaid') === 'true';
    
    if (day > 1 && !paid) {
        currentDay = day;
        showPaywall();
        return;
    }
    
    currentDay = day;
    localStorage.setItem('currentDay', day);
    hidePaywall();
    load();
}

function switchTab(tab) {
    const dayData = courseData[currentDay];
    if (!dayData) return;
    
    if (tab === 'vocabulary' && dayData.vocabulary) {
        loadSection('vocabulary');
    } else if (tab === 'phrases' && dayData.phrases) {
        loadSection('phrases');
    } else if (tab === 'dialogue' && dayData.dialogue) {
        loadSection('dialogue');
    }
}

function renderDialogue() {
    const dayData = courseData[currentDay];
    if (!dayData || !dayData.dialogue) return;
    
    const dialogue = dayData.dialogue;
    let html = `<h3 style="text-align: center; margin-bottom: 20px; color: #6366f1;">${dialogue.title}</h3>`;
    
    dialogue.lines.forEach((line, index) => {
        const speakerName = line.speaker === 'A' ? 'Persona 1' : 'Persona 2';
        html += `
            <div style="background: ${line.speaker === 'A' ? '#1e293b' : '#334155'}; 
                padding: 16px; border-radius: 12px; margin-bottom: 12px; text-align: ${line.speaker === 'A' ? 'left' : 'right'};">
                <div style="font-weight: 600; color: #6366f1; margin-bottom: 6px;">${speakerName}</div>
                <div style="font-size: 16px; margin-bottom: 4px;">${line.text}</div>
                <div style="font-size: 14px; color: #9ca3af;">${line.translation}</div>
            </div>
        `;
    });
    
    document.getElementById('dialogue-content').innerHTML = html;
    document.getElementById('word').style.display = 'none';
    document.getElementById('translation').style.display = 'none';
    document.getElementById('pronunciation').style.display = 'none';
    document.getElementById('options').style.display = 'none';
    document.getElementById('question').innerText = '';
    document.getElementById('feedback').innerText = '';
}

window.onload = function() {
    try {
        load();
    } catch(e) {
        console.error('Error loading course:', e);
        // Fallback: show day 1 content
        currentDay = 1;
        load();
    }
};
