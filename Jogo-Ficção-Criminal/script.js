// Função para iniciar a aventura, escondendo a tela inicial e mostrando a tela de aventura
function startAdventure() {
    document.getElementById("home-screen").style.display = "none";
    document.getElementById("adventure-screen").style.display = "block";
}

// Função para exibir a tela "Como Jogar"
function comojogar() {
    document.getElementById("home-screen").style.display = "none";
    document.getElementById("comojogar").style.display = "block";

    // Exibe a página inicial de "Como Jogar" e esconde as outras
    document.getElementById("comojogar-page-1").style.display = "block";
    document.getElementById("comojogar-page-2").style.display = "none";
    document.getElementById("comojogar-page-3").style.display = "none";
}

// Função para iniciar a primeira aventura, escondendo a tela principal de aventura
// e mostrando a tela específica da aventura 1
function startAdventure1() {
    document.getElementById("adventure-screen").style.display = "none";
    document.getElementById("adventure1-screen").style.display = "block";
}

// Corrigindo a função que vai da tela principal para a aventura 2
function startAdventure2() {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('adventure-screen').style.display = 'none';
    document.getElementById('adventure2-screen').style.display = 'block';

    // Exibir explicitamente a primeira página da aventura 2
    document.getElementById('adventure2-page-1').style.display = 'block';
}

// Função para iniciar a terceira aventura, escondendo a tela principal de aventura
// e mostrando a tela específica da aventura 3
function startAdventure3() {
    document.getElementById("adventure-screen").style.display = "none";
    document.getElementById("adventure3-screen").style.display = "block";
    document.getElementById('adventure3-page-1').style.display = 'block';
}

// Função para voltar à tela principal de aventura, escondendo todas as telas de aventura e do quiz
function goBackToAdventure() {
    document.getElementById("adventure1-screen").style.display = "none";
    document.getElementById("adventure2-screen").style.display = "none";
    document.getElementById("adventure3-screen").style.display = "none";
    document.getElementById("comojogar").style.display = "none";

    // Esconde todas as páginas internas de "Como Jogar"
    document.getElementById("comojogar-page-1").style.display = "none";
    document.getElementById("comojogar-page-2").style.display = "none";
    document.getElementById("comojogar-page-3").style.display = "none";

    document.getElementById("adventure-screen").style.display = "block";
}

// Função para voltar à tela "Como Jogar" a partir da tela de aventura
function goBackTocomojogar() {
    document.getElementById("adventure-screen").style.display = "none";
    document.getElementById("comojogar").style.display = "block";

    // Exibe a página inicial de "Como Jogar" e esconde as outras
    document.getElementById("comojogar-page-1").style.display = "block";
    document.getElementById("comojogar-page-2").style.display = "none";
    document.getElementById("comojogar-page-3").style.display = "none";
}

// Função para voltar à tela inicial
function goBackToHome() {
    document.getElementById("adventure-screen").style.display = "none"; // Esconde a tela de aventura
    document.getElementById("comojogar").style.display = "none"; // Esconde a tela "Como Jogar"
    document.getElementById("home-screen").style.display = "block"; // Mostra a tela inicial

    // Esconde todas as páginas internas de "Como Jogar"
    document.getElementById("comojogar-page-1").style.display = "none";
    document.getElementById("comojogar-page-2").style.display = "none";
    document.getElementById("comojogar-page-3").style.display = "none";
}

// Função genérica para trocar entre duas telas, recebendo os IDs da tela atual e da próxima
function goToPage(currentPageId, nextPageId) {
    document.getElementById(currentPageId).style.display = 'none';
    document.getElementById(nextPageId).style.display = 'block';
}

// Função para reiniciar o jogo, voltando para a tela inicial
function restartGame() {
    document.getElementById("game-over-screen").style.display = "none"; // Esconde a tela de fim de jogo
    document.getElementById("home-screen").style.display = "block"; // Mostra a tela inicial

    // Esconde todas as telas
    document.getElementById("adventure-screen").style.display = "none";
    document.getElementById("adventure1-screen").style.display = "none";
    document.getElementById("adventure2-screen").style.display = "none";
    document.getElementById("adventure3-screen").style.display = "none";
    document.getElementById("comojogar").style.display = "none";

    // Esconde todas as páginas internas de "Como Jogar"
    document.getElementById("comojogar-page-1").style.display = "none";
    document.getElementById("comojogar-page-2").style.display = "none";
    document.getElementById("comojogar-page-3").style.display = "none";
}

// Corrigindo a função que vai da página 10 da aventura 1 para a aventura 2
function goToAdventure2FromPage10() {
    document.getElementById('adventure1-screen').style.display = 'none';
    document.getElementById('adventure2-screen').style.display = 'block';
    
    // Exibir explicitamente a primeira página da aventura 2
    document.getElementById('adventure2-page-1').style.display = 'block';
}

// Corrigindo a função que vai da página 10 da aventura 2 para a aventura 3
function goToAdventure3FromPage10() {
    document.getElementById('adventure2-screen').style.display = 'none';
    document.getElementById('adventure3-screen').style.display = 'block';
    
    // Exibir explicitamente a primeira página da aventura 3
    document.getElementById('adventure3-page-1').style.display = 'block';
}


// Função para resetar os botões de questionamento
function resetQuestionButtons(pageId) {
    const questionButtons = document.querySelectorAll(`#${pageId} .question-buttons button`);
    questionButtons.forEach((button) => {
        button.classList.remove('wrong', 'correct');
    });
}

let currentAdventure = null;
let chancesA1 = 3, chancesA2 = 3, chancesA3 = 3;

function showGameOver(adventure) {
    currentAdventure = adventure;

    document.getElementById("adventure1-screen").style.display = "none";
    document.getElementById("adventure2-screen").style.display = "none";
    document.getElementById("adventure3-screen").style.display = "none";
    document.getElementById("game-over-page").style.display = "block";

    // Oculta todas as páginas internas
    resetAllPages();
}

function restartCurrentAdventure() {
    document.getElementById("game-over-page").style.display = "none";

    switch (currentAdventure) {
        case "adventure1":
            chancesA1 = 3;
            resetAllPages();
            document.getElementById("adventure1-screen").style.display = "block";
            document.getElementById("adventure1-page-1").style.display = "block";
            break;
        case "adventure2":
            chancesA2 = 3;
            resetAllPages();
            document.getElementById("adventure2-screen").style.display = "block";
            document.getElementById("adventure2-page-1").style.display = "block";
            break;
        case "adventure3":
            chancesA3 = 3;
            resetAllPages();
            document.getElementById("adventure3-screen").style.display = "block";
            document.getElementById("adventure3-page-1").style.display = "block";
            break;
    }
}

function resetAllPages() {
    const pages = document.querySelectorAll('[id^="adventure1-page"], [id^="adventure2-page"], [id^="adventure3-page"]');
    pages.forEach(p => p.style.display = 'none');
}

// Oculta todas as páginas da aventura
function resetPages(adventurePrefix) {
    const pages = document.querySelectorAll(`[id^='${adventurePrefix}-page']`);
    pages.forEach(p => p.style.display = 'none');
}

