let chancesA3 = 3; // Número de chances disponíveis
let correctAnsweredPagesA3 = new Set(); // Conjunto para rastrear páginas já respondidas corretamente

// Função para lidar com a resposta da página 3
function handleAnswerPage3A3(answer) {
    const currentPage = 'adventure3-page-3';

    if (correctAnsweredPagesA3.has(currentPage)) return;

    const messageContainer = document.createElement('div');
    messageContainer.style.marginTop = '20px';
    messageContainer.style.textAlign = 'center';
    messageContainer.style.color = 'white';
    messageContainer.style.backgroundColor = '#343031';
    messageContainer.style.padding = '10px';
    messageContainer.style.borderRadius = '5px';
    messageContainer.style.maxWidth = '80%';
    messageContainer.style.margin = '20px auto';

    const questionButtons = document.querySelectorAll(`#${currentPage} .question-buttons button`);
    questionButtons.forEach((button) => button.classList.remove('wrong', 'correct'));

    if (answer === 'wrong') {
        chancesA3--;
        messageContainer.innerHTML = `<p>Resposta errada!</p><p>Você perdeu uma chance. Restam ${chancesA3} chances.</p>`;
        document.getElementById(currentPage).appendChild(messageContainer);

        questionButtons.forEach((button) => {
            if (button.innerText.startsWith('A)', 'B)', 'D)')) {
                button.classList.add('wrong');
            }
        });

        if (chancesA3 === 0) {
            showGameOver("adventure3");
        }
        
    } else if (answer === 'correct') {
        correctAnsweredPagesA3.add(currentPage);
        messageContainer.innerHTML = `<p>Resposta correta!</p><p>Você encontrou a pista certa!</p>`;
        document.getElementById(currentPage).appendChild(messageContainer);

        questionButtons.forEach((button) => {
            if (button.innerText.startsWith('C)')) {
                button.classList.add('correct');
            }
        });

        const nextButton = document.createElement('button');
        nextButton.innerText = 'Avançar';
        nextButton.style.marginTop = '10px';
        nextButton.style.padding = '10px 20px';
        nextButton.style.fontSize = '1rem';
        nextButton.style.border = 'none';
        nextButton.style.borderRadius = '5px';
        nextButton.style.backgroundColor = '#4caf50';
        nextButton.style.color = 'white';
        nextButton.style.cursor = 'pointer';
        nextButton.onclick = () => goToPage(currentPage, 'adventure3-page-4');
        messageContainer.appendChild(nextButton);
    }

    if (answer !== 'correct') {
        setTimeout(() => messageContainer.remove(), 5000);
    }
}

// Função para lidar com a resposta da página 5
function handleAnswerPage5A3(answer) {
    const currentPage = 'adventure3-page-5';

    // Se a página já foi respondida corretamente, não faz mais nada
    if (correctAnsweredPagesA3.has(currentPage)) return;

    const messageContainer = document.createElement('div');
    messageContainer.style.marginTop = '20px';
    messageContainer.style.textAlign = 'center';
    messageContainer.style.color = 'white';
    messageContainer.style.backgroundColor = '#343031'; // Fundo igual aos botões
    messageContainer.style.padding = '10px';
    messageContainer.style.borderRadius = '5px';
    messageContainer.style.maxWidth = '80%';
    messageContainer.style.margin = '20px auto';

    const questionButtons = document.querySelectorAll(`#${currentPage} .question-buttons button`);

    // Remove classes de todos os botões antes de aplicar a nova classe
    questionButtons.forEach((button) => {
        button.classList.remove('wrong', 'correct');
    });

    if (answer === 'wrong') {
        chancesA3 --; // Reduz uma chance
        messageContainer.innerHTML = `<p>Resposta errada!</p><p>Você perdeu uma chance. Restam ${chancesA3} chances.</p>`;
        document.getElementById(currentPage).appendChild(messageContainer);

        // Marca o botão errado como vermelho
        questionButtons.forEach((button) => {
            if (button.innerText.startsWith('A)', 'C)', 'D)')) {
                button.classList.add('wrong');
            }
        });

        if (chancesA3 === 0) {
            showGameOver("adventure3");
        }
        
    
    } else if (answer === 'correct') {
        correctAnsweredPagesA3.add(currentPage); // Marca a página como respondida corretamente
        messageContainer.innerHTML = `
            <p>Resposta correta!</p>
            <p>A fita revela um encontro real e ameaças reais. As vozes foram identificadas mais tarde.</p>
        `;
        document.getElementById(currentPage).appendChild(messageContainer);

        // Marca o botão correto como verde
        questionButtons.forEach((button) => {
            if (button.innerText.startsWith('B)')) {
                button.classList.add('correct');
            }
        });

        // Cria o botão "Avançar" e o adiciona abaixo da mensagem
        const nextButton = document.createElement('button');
        nextButton.innerText = 'Avançar';
        nextButton.style.marginTop = '10px';
        nextButton.style.padding = '10px 20px';
        nextButton.style.fontSize = '1rem';
        nextButton.style.border = 'none';
        nextButton.style.borderRadius = '5px';
        nextButton.style.backgroundColor = '#4caf50'; // Verde
        nextButton.style.color = 'white';
        nextButton.style.cursor = 'pointer';
        nextButton.onclick = () => goToPage(currentPage, 'adventure3-page-6');
        messageContainer.appendChild(nextButton);
    }

    // Remove a mensagem após 5 segundos (apenas se não for a resposta correta)
    if (answer !== 'correct') {
        setTimeout(() => {
            messageContainer.remove();
        }, 5000);
    }
}

// Função para lidar com a resposta da página 7
function handleAnswerPage7A3(answer) {
    const currentPage = 'adventure3-page-7';

    // Se a página já foi respondida corretamente, não faz mais nada
    if (correctAnsweredPagesA3.has(currentPage)) return;

    const messageContainer = document.createElement('div');
    messageContainer.style.marginTop = '20px';
    messageContainer.style.textAlign = 'center';
    messageContainer.style.color = 'white';
    messageContainer.style.backgroundColor = '#343031'; // Fundo igual aos botões
    messageContainer.style.padding = '10px';
    messageContainer.style.borderRadius = '5px';
    messageContainer.style.maxWidth = '80%';
    messageContainer.style.margin = '20px auto';

    const questionButtons = document.querySelectorAll(`#${currentPage} .question-buttons button`);

    // Remove classes de todos os botões antes de aplicar a nova classe
    questionButtons.forEach((button) => {
        button.classList.remove('wrong', 'correct');
    });

    if (answer === 'wrong') {
        chancesA3--; // Reduz uma chance
        messageContainer.innerHTML = `<p>Resposta errada!</p><p>Você perdeu uma chance. Restam ${chancesA3} chances.</p>`;
        document.getElementById(currentPage).appendChild(messageContainer);

        // Marca o botão errado como vermelho
        questionButtons.forEach((button) => {
            if (button.innerText.startsWith('B)', 'C)', 'A)')) {
                button.classList.add('wrong');
            }
        });

        if (chancesA3 === 0) {
            showGameOver("adventure3");
        }
        
    } else if (answer === 'correct') {
        correctAnsweredPagesA3.add(currentPage); // Marca a página como respondida corretamente
        messageContainer.innerHTML = `
            <p>Resposta correta!</p>
            <p>Marianna se comunica em forma de poesia e simbolismo devido ao trauma.</p>
        `;
        document.getElementById(currentPage).appendChild(messageContainer);

        // Marca o botão correto como verde
        questionButtons.forEach((button) => {
            if (button.innerText.startsWith('D)')) {
                button.classList.add('correct');
            }
        });

        // Cria o botão "Avançar" e o adiciona abaixo da mensagem
        const nextButton = document.createElement('button');
        nextButton.innerText = 'Avançar';
        nextButton.style.marginTop = '10px';
        nextButton.style.padding = '10px 20px';
        nextButton.style.fontSize = '1rem';
        nextButton.style.border = 'none';
        nextButton.style.borderRadius = '5px';
        nextButton.style.backgroundColor = '#4caf50'; // Verde
        nextButton.style.color = 'white';
        nextButton.style.cursor = 'pointer';
        nextButton.onclick = () => goToPage(currentPage, 'adventure3-page-8');
        messageContainer.appendChild(nextButton);
    }

    // Remove a mensagem após 5 segundos (apenas se não for a resposta correta)
    if (answer !== 'correct') {
        setTimeout(() => {
            messageContainer.remove();
        }, 5000);
    }
}

// Função para lidar com a resposta da página 9
function handleAnswerPage9A3(answer) {
    const currentPage = 'adventure3-page-9';

    // Se a página já foi respondida corretamente, não faz mais nada
    if (correctAnsweredPagesA3.has(currentPage)) return;

    const messageContainer = document.createElement('div');
    messageContainer.style.marginTop = '20px';
    messageContainer.style.textAlign = 'center';
    messageContainer.style.color = 'white';
    messageContainer.style.backgroundColor = '#343031'; // Fundo igual aos botões
    messageContainer.style.padding = '10px';
    messageContainer.style.borderRadius = '5px';
    messageContainer.style.maxWidth = '80%';
    messageContainer.style.margin = '20px auto';

    const questionButtons = document.querySelectorAll(`#${currentPage} .question-buttons button`);

    // Remove classes de todos os botões antes de aplicar a nova classe
    questionButtons.forEach((button) => {
        button.classList.remove('wrong', 'correct');
    });

    if (answer === 'wrong') {
        chancesA3--; // Reduz uma chance
        messageContainer.innerHTML = `<p>Resposta errada!</p><p>Você perdeu uma chance. Restam ${chancesA3} chances.</p>`;
        document.getElementById(currentPage).appendChild(messageContainer);

        // Marca o botão errado como vermelho
        questionButtons.forEach((button) => {
            if (button.innerText.startsWith('B)', 'D)', 'C)')) {
                button.classList.add('wrong');
            }
        });

        if (chancesA3 === 0) {
            showGameOver("adventure3");
        }
        
    } else if (answer === 'correct') {
        correctAnsweredPagesA3.add(currentPage); // Marca a página como respondida corretamente
        messageContainer.innerHTML = 
        `<p>Resposta correta!</p>
        <p>O trio formava uma sociedade secreta que usava o clube como fachada.</p>`;
        document.getElementById(currentPage).appendChild(messageContainer);

        // Marca o botão correto como verde
        questionButtons.forEach((button) => {
            if (button.innerText.startsWith('A)')) {
                button.classList.add('correct');
            }
        });

        // Cria o botão "Avançar" e o adiciona abaixo da mensagem
        const nextButton = document.createElement('button');
        nextButton.innerText = 'Avançar';
        nextButton.style.marginTop = '10px';
        nextButton.style.padding = '10px 20px';
        nextButton.style.fontSize = '1rem';
        nextButton.style.border = 'none';
        nextButton.style.borderRadius = '5px';
        nextButton.style.backgroundColor = '#4caf50'; // Verde
        nextButton.style.color = 'white';
        nextButton.style.cursor = 'pointer';
        nextButton.onclick = () => goToPage(currentPage, 'adventure3-page-10');
        messageContainer.appendChild(nextButton);
    }

    // Remove a mensagem após 5 segundos (apenas se não for a resposta correta)
    if (answer !== 'correct') {
        setTimeout(() => {
            messageContainer.remove();
        }, 5000);
    }
}

// Função para lidar com a resposta da página 11
function handleAnswerPage11A3(answer) {
    const currentPage = 'adventure3-page-11';

    // Se a página já foi respondida corretamente, não faz mais nada
    if (correctAnsweredPagesA3.has(currentPage)) return;

    const messageContainer = document.createElement('div');
    messageContainer.style.marginTop = '20px';
    messageContainer.style.textAlign = 'center';
    messageContainer.style.color = 'white';
    messageContainer.style.backgroundColor = '#343031'; // Fundo igual aos botões
    messageContainer.style.padding = '10px';
    messageContainer.style.borderRadius = '5px';
    messageContainer.style.maxWidth = '80%';
    messageContainer.style.margin = '20px auto';

    const questionButtons = document.querySelectorAll(`#${currentPage} .question-buttons button`);

    // Remove classes de todos os botões antes de aplicar a nova classe
    questionButtons.forEach((button) => {
        button.classList.remove('wrong', 'correct');
    });

    if (answer === 'wrong') {
        chancesA3--; // Reduz uma chance
        messageContainer.innerHTML = `<p>Resposta errada!</p><p>Você perdeu uma chance. Restam ${chancesA3} chances.</p>`;
        document.getElementById(currentPage).appendChild(messageContainer);

        // Marca o botão errado como vermelho
        questionButtons.forEach((button) => {
            if (button.innerText.startsWith('B)', 'C)', 'D)')) {
                button.classList.add('wrong');
            }
        });

        if (chancesA3 === 0) {
            showGameOver("adventure3");
        }
        
    } else if (answer === 'correct') {
        correctAnsweredPagesA3.add(currentPage); // Marca a página como respondida corretamente
        messageContainer.innerHTML = 
        `<p>Resposta correta!</p>
        <p>O motivo do assassinato foi silenciar a verdade sobre o controle exercido pelo clube.</p>`;
        document.getElementById(currentPage).appendChild(messageContainer);

        // Marca o botão correto como verde
        questionButtons.forEach((button) => {
            if (button.innerText.startsWith('A)')) {
                button.classList.add('correct');
            }
        });

        // Cria o botão "Avançar" e o adiciona abaixo da mensagem
        const nextButton = document.createElement('button');
        nextButton.innerText = 'Avançar';
        nextButton.style.marginTop = '10px';
        nextButton.style.padding = '10px 20px';
        nextButton.style.fontSize = '1rem';
        nextButton.style.border = 'none';
        nextButton.style.borderRadius = '5px';
        nextButton.style.backgroundColor = '#4caf50'; // Verde
        nextButton.style.color = 'white';
        nextButton.style.cursor = 'pointer';
        nextButton.onclick = () => goToPage(currentPage, 'adventure3-page-12');
        messageContainer.appendChild(nextButton);
    }

    // Remove a mensagem após 5 segundos (apenas se não for a resposta correta)
    if (answer !== 'correct') {
        setTimeout(() => {
            messageContainer.remove();
        }, 5000);
    }
}