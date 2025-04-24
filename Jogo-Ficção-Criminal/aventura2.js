let chancesA2 = 3; // Número de chances disponíveis
let correctAnsweredPagesA2 = new Set(); // Conjunto para rastrear páginas já respondidas corretamente

// Função para lidar com a resposta da página 5
function handleAnswerPage5A2(answer) {
    const currentPage = 'adventure2-page-5';

    // Se a página já foi respondida corretamente, não faz mais nada
    if (correctAnsweredPagesA2.has(currentPage)) return;

    const messageContainer = document.createElement('div');
    messageContainer.style.marginTop = '20px';
    messageContainer.style.textAlign = 'center';
    messageContainer.style.color = 'white';
    messageContainer.style.backgroundColor = '#343031'; // Fundo igual aos botões
    messageContainer.style.padding = '10px';
    messageContainer.style.borderRadius = '5px';
    messageContainer.style.maxWidth = '80%';
    messageContainer.style.margin = '20px auto';

    const questionButtons = document.querySelectorAll('#adventure2-page-5 .question-buttons button');

    // Remove classes de todos os botões antes de aplicar a nova classe
    questionButtons.forEach((button) => {
        button.classList.remove('wrong', 'correct');
    });

    if (answer === 'wrong') {
        chancesA2--; // Reduz uma chance
        messageContainer.innerHTML = `<p>Resposta errada!</p><p>Você perdeu uma chance. Restam ${chancesA2} chances.</p>`;
        document.getElementById('adventure2-page-5').appendChild(messageContainer);

        // Marca o botão errado como vermelho
        questionButtons.forEach((button) => {
            if (button.innerText.startsWith('B)')) {
                button.classList.add('wrong');
            }
        });

        if (chancesA2 === 0) {
            showGameOver("adventure2");
        }
    
        
    } else if (answer === 'correct') {
        correctAnsweredPagesA2.add(currentPage); // Marca a página como respondida corretamente
        messageContainer.innerHTML = `
            <p>Resposta correta!</p>
            <p>Testemunhas depois confirmam visitas noturnas de três pessoas diferentes, sempre com intervalos semelhantes.</p>
        `;
        document.getElementById('adventure2-page-5').appendChild(messageContainer);

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
        nextButton.onclick = () => {
            resetQuestionButtons('adventure2-page-6'); // Reseta os botões da página 5 antes de ir para ela
            goToPage('adventure2-page-5', 'adventure2-page-6');
        };
        messageContainer.appendChild(nextButton);
    }

    // Remove a mensagem após 5 segundos (apenas se não for a resposta correta)
    if (answer !== 'correct') {
        setTimeout(() => {
            messageContainer.remove();
        }, 5000);
    }
}

// Função para lidar com a resposta da página 6
function handleAnswerPage6A2(answer) {
    const currentPage = 'adventure2-page-6';

    // Se a página já foi respondida corretamente, não faz mais nada
    if (correctAnsweredPagesA2.has(currentPage)) return;

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
        chancesA2--; // Reduz uma chance
        messageContainer.innerHTML = `<p>Resposta errada!</p><p>Você perdeu uma chance. Restam ${chancesA2} chances.</p>`;
        document.getElementById(currentPage).appendChild(messageContainer);

        // Marca o botão errado como vermelho
        questionButtons.forEach((button) => {
            if (button.innerText.startsWith('A)')) {
                button.classList.add('wrong');
            }
        });

        if (chancesA2 === 0) {
            showGameOver("adventure2");
        }
        
    } else if (answer === 'correct') {
        correctAnsweredPagesA2.add(currentPage); // Marca a página como respondida corretamente
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
        nextButton.onclick = () => goToPage(currentPage, 'adventure2-page-7');
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
function handleAnswerPage7A2(answer) {
    const currentPage = 'adventure2-page-7';

    // Se a página já foi respondida corretamente, não faz mais nada
    if (correctAnsweredPagesA2.has(currentPage)) return;

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
        chancesA2--; // Reduz uma chance
        messageContainer.innerHTML = `<p>Resposta errada!</p><p>Você perdeu uma chance. Restam ${chancesA2} chances.</p>`;
        document.getElementById(currentPage).appendChild(messageContainer);

        // Marca o botão errado como vermelho
        questionButtons.forEach((button) => {
            if (button.innerText.startsWith('B)')) {
                button.classList.add('wrong');
            }
        });

        if (chancesA2 === 0) {
            showGameOver("adventure2");
        }
    
    } else if (answer === 'correct') {
        correctAnsweredPagesA2.add(currentPage); // Marca a página como respondida corretamente
        messageContainer.innerHTML = `
            <p>Resposta correta!</p>
            <p>Marianna se comunica em forma de poesia e simbolismo devido ao trauma.</p>
        `;
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
        nextButton.onclick = () => goToPage(currentPage, 'adventure2-page-8');
        messageContainer.appendChild(nextButton);
    }

    // Remove a mensagem após 5 segundos (apenas se não for a resposta correta)
    if (answer !== 'correct') {
        setTimeout(() => {
            messageContainer.remove();
        }, 5000);
    }
}

// Função para lidar com a resposta da página 8
function handleAnswerPage8A2(answer) {
    const currentPage = 'adventure2-page-8';

    // Se a página já foi respondida corretamente, não faz mais nada
    if (correctAnsweredPagesA2.has(currentPage)) return;

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
        chancesA2--; // Reduz uma chance
        messageContainer.innerHTML = `<p>Resposta errada!</p><p>Você perdeu uma chance. Restam ${chancesA2} chances.</p>`;
        document.getElementById(currentPage).appendChild(messageContainer);

        // Marca o botão errado como vermelho
        questionButtons.forEach((button) => {
            if (button.innerText.startsWith('A)')) {
                button.classList.add('wrong');
            }
        });

        if (chancesA2 === 0) {
            showGameOver("adventure2");
        }
        
    } else if (answer === 'correct') {
        correctAnsweredPagesA2.add(currentPage); // Marca a página como respondida corretamente
        messageContainer.innerHTML = 
        `<p>Resposta correta!</p>
        <p>O trio formava uma sociedade secreta que usava o clube como fachada.</p>`;
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
        nextButton.onclick = () => goToPage(currentPage, 'adventure2-page-9');
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
function handleAnswerPage9A2(answer) {
    const currentPage = 'adventure2-page-9';

    // Se a página já foi respondida corretamente, não faz mais nada
    if (correctAnsweredPagesA2.has(currentPage)) return;

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
        chancesA2--; // Reduz uma chance
        messageContainer.innerHTML = `<p>Resposta errada!</p><p>Você perdeu uma chance. Restam ${chancesA2} chances.</p>`;
        document.getElementById(currentPage).appendChild(messageContainer);

        // Marca o botão errado como vermelho
        questionButtons.forEach((button) => {
            if (button.innerText.startsWith('A)')) {
                button.classList.add('wrong');
            }
        });

        if (chancesA2 === 0) {
            showGameOver("adventure2");
        }
        
    } else if (answer === 'correct') {
        correctAnsweredPagesA2.add(currentPage); // Marca a página como respondida corretamente
        messageContainer.innerHTML = 
        `<p>Resposta correta!</p>
        <p>O motivo do assassinato foi silenciar a verdade sobre o controle exercido pelo clube.</p>`;
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
        nextButton.onclick = () => goToPage(currentPage, 'adventure2-page-10');
        messageContainer.appendChild(nextButton);
    }

    // Remove a mensagem após 5 segundos (apenas se não for a resposta correta)
    if (answer !== 'correct') {
        setTimeout(() => {
            messageContainer.remove();
        }, 5000);
    }
}