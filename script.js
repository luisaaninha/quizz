// O quiz agora só inicia quando o usuário clicar em "Sim"

// Funções da tela inicial
function startQuiz() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
    loadQuestion();
}

function exitQuiz() {
    document.getElementById('start-screen').innerHTML = '<h2>Obrigado por visitar o Quiz !</h2>';
}
// Definindo as 8 perguntas, alternativas e resposta correta
const questions = [
    {
        frame: 'imagens/frame3.jpg',
        alternatives: ['O Cavaleiro das Trevas', 'Inception', 'Matrix', 'Logan', 'Interstellar', 'Titanic'],
        correct: 0 // Resposta correta é "O Cavaleiro das Trevas"
    },
    {
        frame: 'imagens/frame5.jpg',
        alternatives: ['Duna', 'Interstellar', '2001: Uma Odisseia no Espaço', 'Star Wars', 'Gravity', 'Avatar'],
        correct: 1 // Resposta correta é "Interstellar"
    },
    {
        frame: 'imagens/up.webp',
        alternatives: ['Procurando Nemo', 'A Vida Marinha', 'Aquaman', 'Vida de Inseto', 'Monstros S.A.', 'Up'],
        correct: 5 // Resposta correta é "Up"
    },
    {
        frame: 'imagens/futuro.jpg',
        alternatives: ['Star Wars', 'Duna', 'Interstellar', 'O Exterminador do Futuro', 'Matrix', 'A Chegada'],
        correct: 3 // Resposta correta é "O Exterminador do Futuro"
    },
    {
        frame: 'imagens/caribre.jpg',
        alternatives: ['Jurassic Park', 'Piratas do Caribe', 'O Hobbit', 'A Guerra dos Tronos', 'Vingadores', 'Frozen'],
        correct: 1 // Resposta correta é "Piratas do Caribe"
    },
    {
        frame: 'imagens/frame4.jpg',
        alternatives: ['Shrek', 'Toy Story', 'Vingadores', 'Up', 'Frozen', 'A Bela e a Fera'],
        correct: 0 // Resposta correta é "Shrek"
    },
    {
        frame: 'imagens/frame7.jpg',
        alternatives: ['Duna', 'Interstellar', '2001: Uma Odisseia no Espaço', 'Avatar', 'Star Wars', 'Elysium'],
        correct: 3 // Resposta correta é "Avatar"
    },
    {
        frame: 'imagens/frame8.jpg',
        alternatives: ['American Psycho', 'Clube da Luta', 'O Mágico de Oz', 'O Vingador do Futuro', 'Batman', 'O Grande Lebowski'],
        correct: 0 // Resposta correta é "American Psycho"
    }
];

let currentQuestion = 0; // Pergunta atual
let progress = []; // Para armazenar o progresso

// Função para carregar a pergunta
function loadQuestion() {
    const question = questions[currentQuestion];
    const imgElement = document.getElementById('movie-frame');
    imgElement.src = question.frame;
    imgElement.style.display = 'none'; // Começa com a imagem invisível
    imgElement.onload = () => {
        imgElement.style.display = 'block'; // Torna a imagem visível quando carregada
    };

    // Carregar as alternativas
    const buttons = document.querySelectorAll('#quiz-section .alternative');
    buttons.forEach((button, index) => {
        button.textContent = question.alternatives[index];
    });

    // Limpar resultados
    document.getElementById('result').textContent = '';
    document.getElementById('next-btn').style.display = 'none';
    resetProgress();
}

// Função para checar a resposta
function checkAnswer(selected) {
    const question = questions[currentQuestion];
    const result = document.getElementById('result');
    
    if (selected === question.correct) {
        result.textContent = 'AEEE CORRETÍSSIMO!';
        progress[selected] = 'active';
    } else {
        result.textContent = 'OOHHH NÃO, NÃO.';
    }

    document.getElementById('next-btn').style.display = 'block'; // Exibe o botão de próxima pergunta
    updateProgress();
}

// Função para atualizar o progresso
function updateProgress() {
    const progressBar = document.getElementById('progress-bar');
    const progressElements = progressBar.querySelectorAll('.progress');
    progressElements.forEach((element, index) => {
        element.classList.remove('active');
        if (progress[index] === 'active') {
            element.classList.add('active');
        }
    });
}

// Função para reiniciar o progresso
function resetProgress() {
    progress = ['inactive', 'inactive', 'inactive', 'inactive', 'inactive', 'inactive'];
    updateProgress();
}

// Função para ir para a próxima pergunta
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById('quiz-section').innerHTML = `
            <h2>🎉 Fim do Quiz! 🎉</h2>
            <p>Obrigado por jogar com a gente! Esperamos que tenha se divertido.</p>
            <button class="start-btn" onclick="location.reload()">Jogar novamente</button>
        `;
    }
}


// Carregar a primeira pergunta
loadQuestion();
