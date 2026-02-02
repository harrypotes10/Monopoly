// ==========================================
// 1. BASE DE DATOS MAESTRA (PRE-CARGADA)
// ==========================================
const INITIAL_DB = {
    math: [
        // FÁCIL
        {t: "¿2 + 2?", a: ["4", "5"], c: 0, dif: "facil"},
        {t: "¿5 x 5?", a: ["25", "20"], c: 0, dif: "facil"},
        {t: "¿Lados de un triángulo?", a: ["3", "4"], c: 0, dif: "facil"},
        {t: "¿9 - 4?", a: ["5", "3"], c: 0, dif: "facil"},
        // MEDIO
        {t: "¿Raíz de 81?", a: ["9", "8"], c: 0, dif: "medio"},
        {t: "¿12 x 12?", a: ["144", "124"], c: 0, dif: "medio"},
        {t: "¿50% de 200?", a: ["100", "50"], c: 0, dif: "medio"},
        {t: "¿3 al cubo?", a: ["27", "9"], c: 0, dif: "medio"},
        // DIFÍCIL
        {t: "¿Valor de PI?", a: ["3.1416", "3.15"], c: 0, dif: "dificil"},
        {t: "¿Si 2x = 10, x es?", a: ["5", "2"], c: 0, dif: "dificil"},
        {t: "¿Área círculo r=3?", a: ["28.27", "15.4"], c: 0, dif: "dificil"},
        {t: "¿Raíz cuadrada de 225?", a: ["15", "25"], c: 0, dif: "dificil"}
    ],
    lang: [
        // FÁCIL
        {t: "¿Plural de 'Lápiz'?", a: ["Lápices", "Lápizes"], c: 0, dif: "facil"},
        {t: "¿Verbo en: 'Yo corro'?", a: ["Corro", "Yo"], c: 0, dif: "facil"},
        {t: "¿Sinónimo de 'Feliz'?", a: ["Alegre", "Triste"], c: 0, dif: "facil"},
        // MEDIO
        {t: "¿Antónimo de 'Eficaz'?", a: ["Ineficaz", "Activo"], c: 0, dif: "medio"},
        {t: "¿Qué es una metáfora?", a: ["Comparación", "Sonido"], c: 0, dif: "medio"},
        {t: "¿Sujeto: 'El sol brilla'?", a: ["El sol", "Brilla"], c: 0, dif: "medio"},
        // DIFÍCIL
        {t: "¿Autor de 'Cien Años de Soledad'?", a: ["García Márquez", "Neruda"], c: 0, dif: "dificil"},
        {t: "¿Palabra esdrújula?", a: ["Brújula", "Camión"], c: 0, dif: "dificil"},
        {t: "¿Autor de Don Quijote?", a: ["Cervantes", "Shakespeare"], c: 0, dif: "dificil"}
    ],
    sci: [
        // FÁCIL
        {t: "¿Fórmula del agua?", a: ["H2O", "HO2"], c: 0, dif: "facil"},
        {t: "¿Planeta Rojo?", a: ["Marte", "Júpiter"], c: 0, dif: "facil"},
        {t: "¿Animal que ladra?", a: ["Perro", "Gato"], c: 0, dif: "facil"},
        // MEDIO
        {t: "¿Símbolo del Oro?", a: ["Au", "Ag"], c: 0, dif: "medio"},
        {t: "¿Hueso más largo?", a: ["Fémur", "Tibia"], c: 0, dif: "medio"},
        {t: "¿Gas que respiramos?", a: ["Oxígeno", "Helio"], c: 0, dif: "medio"},
        // DIFÍCIL
        {t: "¿Velocidad de la luz?", a: ["300k km/s", "100k km/s"], c: 0, dif: "dificil"},
        {t: "¿División celular?", a: ["Mitosis", "Osmosis"], c: 0, dif: "dificil"},
        {t: "¿Número atómico del Carbono?", a: ["6", "12"], c: 0, dif: "dificil"}
    ],
    hist: [
        // FÁCIL
        {t: "¿Descubrimiento de América?", a: ["1492", "1500"], c: 0, dif: "facil"},
        {t: "¿Capital de Ecuador?", a: ["Quito", "Guayaquil"], c: 0, dif: "facil"},
        {t: "¿Colores bandera Ecuador?", a: ["Amarillo, Azul, Rojo", "Blanco, Azul, Rojo"], c: 0, dif: "facil"},
        // MEDIO
        {t: "¿Primer presidente Ecuador?", a: ["Juan José Flores", "Rocafuerte"], c: 0, dif: "medio"},
        {t: "¿Revolución Francesa?", a: ["1789", "1810"], c: 0, dif: "medio"},
        {t: "¿Moneda de Ecuador?", a: ["Dólar", "Peso"], c: 0, dif: "medio"},
        // DIFÍCIL
        {t: "¿Caída Muro de Berlín?", a: ["1989", "1995"], c: 0, dif: "dificil"},
        {t: "¿Capital Imperio Inca?", a: ["Cusco", "Machu Picchu"], c: 0, dif: "dificil"},
        {t: "¿Segunda Guerra Mundial?", a: ["1939-1945", "1914-1918"], c: 0, dif: "dificil"}
    ]
};

// Mapa del Tablero y Estilos
const boardMap = {
    1:'math', 2:'lang', 3:'luck', 4:'sci', 5:'hist', 6:'math', 7:'luck', 8:'lang', 9:'sci',
    11:'hist', 12:'math', 13:'lang', 14:'sci', 15:'luck', 16:'hist', 17:'math', 18:'lang', 19:'sci',
    21:'luck', 22:'math', 23:'hist', 24:'sci', 25:'lang', 26:'math', 27:'hist', 28:'luck', 29:'sci',
    31:'lang', 32:'math', 33:'hist', 34:'sci', 35:'luck', 36:'lang', 37:'math', 38:'luck', 39:'hist'
};

const stylesMap = {
    math: { title: "MATEMÁTICAS", color: "#ff7675" },
    lang: { title: "LENGUA", color: "#74b9ff" },
    sci:  { title: "CIENCIAS", color: "#55efc4" },
    hist: { title: "HISTORIA", color: "#ffeaa7" },
    luck: { title: "¡SUERTE!", color: "#a29bfe" }
};

// Variables de Estado
let players = [];
let currentPlayerIndex = 0;
let isLocked = false;
let selectedPlayers = 2;
let questionsDB = {}; // Se llenará al iniciar

// ==========================================
// 2. INICIALIZADOR
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. CARGAR BASE DE DATOS LOCAL
    loadQuestionsLocal();

    // 2. DETECTAR PANTALLA
    if (document.getElementById('btn-2')) {
        selectPlayers(2); // Pantalla Inicio
    } else if (document.getElementById('board')) {
        initGameLocal();  // Pantalla Juego
    } else if (document.getElementById('winner-name')) {
        showResultsLocal(); // Pantalla Fin
    }
});

function loadQuestionsLocal() {
    // Intentar leer memoria del navegador
    const stored = localStorage.getItem('monopoly_questions_v2');
    
    if (stored) {
        // Si ya existen (ej. el profesor agregó nuevas), las usamos
        console.log("Cargando preguntas de memoria...");
        questionsDB = JSON.parse(stored);
    } else {
        // Si es la primera vez, usamos la BASE DE DATOS MAESTRA
        console.log("Inicializando base de datos maestra...");
        questionsDB = JSON.parse(JSON.stringify(INITIAL_DB));
        localStorage.setItem('monopoly_questions_v2', JSON.stringify(questionsDB));
    }
}

// ==========================================
// 3. PANTALLA PROFESOR (FUNCIÓN CORREGIDA)
// ==========================================
function saveQuestionLocal(e) {
    e.preventDefault(); // Evita que se recargue la página

    // Obtener valores del formulario
    const materia = document.getElementById('t-materia').value;
    const dificultad = document.getElementById('t-dificultad').value;
    const texto = document.getElementById('t-texto').value;
    const op1 = document.getElementById('t-op1').value;
    const op2 = document.getElementById('t-op2').value;
    
    // Obtener radio button seleccionado
    const radio = document.querySelector('input[name="correcta"]:checked');
    const correcta = radio ? parseInt(radio.value) : 0;

    if(!texto || !op1 || !op2) {
        alert("Llena todos los campos");
        return;
    }

    // Asegurarnos que la categoría existe en la DB
    if(!questionsDB[materia]) questionsDB[materia] = [];

    // Agregar nueva pregunta
    const nuevaPregunta = {
        t: texto,
        a: [op1, op2],
        c: correcta,
        dif: dificultad
    };

    questionsDB[materia].push(nuevaPregunta);

    // GUARDAR EN MEMORIA DEL NAVEGADOR
    localStorage.setItem('monopoly_questions_v2', JSON.stringify(questionsDB));

    // Feedback visual
    const status = document.getElementById('msg-status');
    status.innerText = "✅ ¡Pregunta guardada correctamente!";
    status.style.color = "#2ecc71";
    
    // Limpiar formulario
    document.getElementById('question-form').reset();
    
    console.log("Pregunta guardada:", nuevaPregunta);
}

// ==========================================
// 4. PANTALLAS DE NAVEGACIÓN
// ==========================================
function selectPlayers(num) {
    selectedPlayers = num;
    document.querySelectorAll('.btn-select').forEach(b => b.classList.remove('selected'));
    const btn = document.getElementById(`btn-${num}`);
    if(btn) btn.classList.add('selected');
}

function goToNames() {
    const dif = document.getElementById('difficulty').value;
    localStorage.setItem('numPlayers', selectedPlayers);
    localStorage.setItem('difficulty', dif);
    window.location.href = 'names.html';
}

function submitNames(e) {
    e.preventDefault();
    const num = localStorage.getItem('numPlayers') || 2;
    let names = [];
    for(let i=0; i<num; i++) {
        names.push(document.getElementById(`name-${i}`).value || `Jugador ${i+1}`);
    }
    localStorage.setItem('playerNames', JSON.stringify(names));
    window.location.href = 'game.html';
}

// ==========================================
// 5. LÓGICA DEL JUEGO
// ==========================================
function initGameLocal() {
    drawBoard();
    
    const num = parseInt(localStorage.getItem('numPlayers')) || 2;
    const names = JSON.parse(localStorage.getItem('playerNames')) || [];
    
    // Reiniciar jugadores
    players = [];
    document.getElementById('tokens-container').innerHTML = '';

    for (let i = 0; i < num; i++) {
        let p = {
            id: i,
            nombre: names[i],
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${names[i]}&backgroundColor=b6e3f4`,
            colorClass: `p${i+1}`,
            posicion: 0,
            dinero: 500,
            correctas: 0
        };
        players.push(p);
        createTokenVisual(i, p);
    }
    updateUI();
}

// DIBUJAR TABLERO
function drawBoard() {
    const board = document.getElementById('board');
    if(!board) return;
    document.querySelectorAll('.cell').forEach(c => c.remove());

    for(let i=0; i<40; i++) {
        const d = document.createElement('div');
        d.className = 'cell';
        if(boardMap[i]) d.classList.add(`c-${boardMap[i]}`);
        else if([0,10,20,30].includes(i)) d.classList.add('c-corner');
        
        const cCoords = getGridCoords(i);
        d.style.gridColumn = cCoords.col;
        d.style.gridRow = cCoords.row;
        
        d.innerHTML = `<span class="cell-number">${i}</span>`;
        if(i===0) d.innerHTML+="<br>SALIDA";
        if(i===10) d.innerHTML+="<br>CÁRCEL";
        if(i===30) d.innerHTML+="IR A<br>CÁRCEL";
        if(boardMap[i]==='luck') d.innerHTML+="❓";
        
        board.appendChild(d);
    }
}

function getGridCoords(p) {
    if (p<10) return {col:11-p, row:11};
    if (p<20) return {col:1, row:11-(p-10)};
    if (p<30) return {col:(p-20)+1, row:1};
    return {col:11, row:(p-30)+1};
}

// FICHAS
function createTokenVisual(idx, p) {
    const t = document.createElement('div');
    t.className = `token ${p.colorClass}`;
    t.id = `token-${idx}`;
    const img = document.createElement('img');
    img.src = p.avatar;
    t.appendChild(img);
    document.getElementById('tokens-container').appendChild(t);
    moveTokenToPos(idx, 0);
}

function moveTokenToPos(idx, pos) {
    const t = document.getElementById(`token-${idx}`);
    if(!t) return;
    const c = getGridCoords(pos);
    const cellSize = 70; // Tamaño celda CSS
    const left = (c.col-1)*cellSize + 12;
    const top = (c.row-1)*cellSize + 12;
    const offset = idx * 4; 
    t.style.left = `${left + offset}px`;
    t.style.top = `${top + offset}px`;
    
    if(idx === currentPlayerIndex) t.classList.add('active-turn');
    else t.classList.remove('active-turn');
}

// DADO
function rollDigitalDice() {
    if(isLocked) return;
    isLocked = true;
    document.getElementById('btn-roll').disabled = true;
    const v = document.getElementById('dice-visual');
    v.classList.add('shake');
    let c = 0;
    const inter = setInterval(() => {
        v.innerText = Math.floor(Math.random()*6)+1;
        c++;
        if(c>12) {
            clearInterval(inter);
            v.classList.remove('shake');
            const val = Math.floor(Math.random()*6)+1;
            v.innerText = val;
            executeMove(val);
        }
    }, 80);
}

function executeMove(steps) {
    const p = players[currentPlayerIndex];
    document.getElementById('dice-result-text').innerText = `Avanza ${steps}`;
    let left = steps;
    
    if(window.mvInt) clearInterval(window.mvInt);
    window.mvInt = setInterval(() => {
        p.posicion = (p.posicion+1)%40;
        moveTokenToPos(currentPlayerIndex, p.posicion);
        left--;
        if(left<=0) {
            clearInterval(window.mvInt);
            checkLanding(p);
        }
    }, 300);
}

function checkLanding(p) {
    if(p.posicion === 30) {
        setTimeout(()=>{
            alert("¡A la cárcel!");
            p.posicion = 10;
            moveTokenToPos(currentPlayerIndex, 10);
            nextTurn();
        }, 500);
        return;
    }

    const type = boardMap[p.posicion];
    if(type) {
        // FILTRADO INTELIGENTE
        const difSeleccionada = localStorage.getItem('difficulty') || 'medio';
        
        let pool = [];
        if(questionsDB[type]) {
            // Intentar buscar preguntas de la dificultad exacta
            pool = questionsDB[type].filter(q => q.dif === difSeleccionada);
            // Si no hay, usar cualquiera de esa materia
            if(pool.length === 0) pool = questionsDB[type];
        }

        if(pool.length > 0) setTimeout(()=>showQ(type, p, pool), 500);
        else if(type==='luck') setTimeout(()=>showQ('luck', p, []), 500);
        else setTimeout(()=>nextTurn(), 500);
    } else {
        setTimeout(()=>nextTurn(), 500);
    }
}

function showQ(type, p, pool) {
    document.getElementById('panel-ranking').classList.add('hidden-panel');
    document.getElementById('panel-question').classList.remove('hidden-panel');
    
    const style = stylesMap[type] || {title:"EVENTO", color:"#333"};
    document.getElementById('q-header').innerText = style.title;
    document.getElementById('q-header').style.background = style.color;
    document.getElementById('btn-close-event').classList.add('hidden');
    document.getElementById('feedback-msg').innerText = "";
    
    const box = document.getElementById('answers-container');
    box.innerHTML = '';

    if(type === 'luck') {
        document.getElementById('q-text').innerText = "¡Encontraste dinero en el suelo!";
        p.dinero += 50;
        document.getElementById('feedback-msg').innerText = "+ $50";
        document.getElementById('btn-close-event').classList.remove('hidden');
    } else {
        const q = pool[Math.floor(Math.random()*pool.length)];
        document.getElementById('q-text').innerText = q.t;
        q.a.forEach((ans, idx) => {
            const b = document.createElement('button');
            b.className = 'btn-ans';
            b.innerText = ans;
            b.onclick = () => {
                if(idx === q.c) {
                    document.getElementById('feedback-msg').innerText = "¡CORRECTO! +$50";
                    document.getElementById('feedback-msg').style.color = "#2ecc71";
                    p.dinero += 50;
                    p.correctas++;
                } else {
                    document.getElementById('feedback-msg').innerText = "MAL -$20";
                    document.getElementById('feedback-msg').style.color = "#e74c3c";
                    p.dinero = Math.max(0, p.dinero-20);
                }
                box.innerHTML = '';
                document.getElementById('btn-close-event').classList.remove('hidden');
            };
            box.appendChild(b);
        });
    }
    updateUI();
}

function closeEvent() {
    document.getElementById('panel-question').classList.add('hidden-panel');
    document.getElementById('panel-ranking').classList.remove('hidden-panel');
    nextTurn();
}

function nextTurn() {
    currentPlayerIndex = (currentPlayerIndex+1)%players.length;
    updateUI();
    isLocked = false;
    document.getElementById('btn-roll').disabled = false;
    document.getElementById('dice-result-text').innerText = "Tu turno";
    moveTokenToPos(currentPlayerIndex, players[currentPlayerIndex].posicion);
}

function updateUI() {
    if(players.length===0) return;
    const p = players[currentPlayerIndex];
    const headerName = document.getElementById('header-player-name');
    if(headerName) headerName.innerText = p.nombre;
    
    const list = document.getElementById('ranking-list');
    if(list) {
        list.innerHTML = '';
        [...players].sort((a,b)=>b.dinero-a.dinero).forEach((pl, idx)=>{
            const act = (pl.id === players[currentPlayerIndex].id) ? 'active' : '';
            list.innerHTML += `<li class="ranking-item ${act}">
                <div class="player-info"><span class="player-name">${idx+1}. ${pl.nombre}</span>
                <span class="player-skill">⭐ ${pl.correctas}</span></div>
                <span class="player-cash">$${pl.dinero}</span></li>`;
        });
    }
}

// RESULTADOS
function endGameManually() {
    localStorage.setItem('winnerData', JSON.stringify(players));
    window.location.href = 'winner.html';
}

function showResultsLocal() {
    const data = JSON.parse(localStorage.getItem('winnerData')) || [];
    data.sort((a,b)=>b.dinero-a.dinero);
    if(data[0]) {
        document.getElementById('winner-name').innerText = data[0].nombre;
        document.getElementById('winner-money').innerText = `$${data[0].dinero}`;
        document.getElementById('winner-avatar').src = data[0].avatar;
    }
}