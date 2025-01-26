// Seleciona os elementos do DOM
const nameInput = document.getElementById('name-input');
const addNameBtn = document.getElementById('add-name-btn');
const nameList = document.getElementById('name-list');
const drawBtn = document.getElementById('draw-btn');
const winnerDisplay = document.getElementById('winner');

// Array para armazenar os nomes
let names = [];

// Função para adicionar nome à lista
function addName() {
    const name = nameInput.value.trim();  // Remove espaços extras

    if (name === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    // Adiciona o nome à lista de nomes
    names.push(name);

    // Atualiza a lista exibida
    updateNameList();

    // Limpa o campo de entrada
    nameInput.value = '';
    nameInput.focus();

    // Exibe o botão de sorteio se houver mais de um nome
    if (names.length > 1) {
        drawBtn.style.display = 'inline-block';
    }
}

// Função para atualizar a lista de nomes na tela
function updateNameList() {
    nameList.innerHTML = '';  // Limpa a lista atual

    // Adiciona cada nome à lista no DOM
    names.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        nameList.appendChild(li);
    });
}

// Função para sortear um nome aleatoriamente
function drawName() {
    const randomIndex = Math.floor(Math.random() * names.length);
    const winner = names[randomIndex];

    // Exibe o nome sorteado
    winnerDisplay.textContent = `Nome sorteado: ${winner}`;
}

// Eventos
addNameBtn.addEventListener('click', addName);
drawBtn.addEventListener('click', drawName);

// Permite adicionar nomes pressionando "Enter"
nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addName();
    }
});