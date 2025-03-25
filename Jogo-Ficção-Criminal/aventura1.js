let chancesA1 = 3; // Número de chances disponíveis
let correctAnsweredPagesA1 = new Set(); // Conjunto para rastrear páginas já respondidas corretamente

// Função para lidar com a resposta da página 4
function handleAnswer(answer) {
    const currentPage = 'adventure1-page-4';

    if (correctAnsweredPagesA1.has(currentPage)) return;

    const messageContainer = document.createElement('div');
    messageContainer.style.marginTop = '20px';
    messageContainer.style.textAlign = 'center';
    messageContainer.style.color = 'white';
    messageContainer.style.backgroundColor = '#343031';
    messageContainer.style.padding = '10px';
    messageContainer.style.borderRadius = '5px';
    messageContainer.style.maxWidth = '80%';
    messageContainer.style.margin = '20px auto';

    const questionButtons = document.querySelectorAll('#adventure1-page-4 .question-buttons button');
    questionButtons.forEach((button) => button.classList.remove('wrong', 'correct'));

    if (answer === 'wrong') {
        chancesA1--; // Corrigido para usar chancesA1
        messageContainer.innerHTML = `<p>Resposta errada!</p><p>Você perdeu uma chance. Restam ${chancesA1} chances.</p>`;
        document.getElementById('adventure1-page-4').appendChild(messageContainer);

        questionButtons.forEach((button) => {
            if (button.innerText.startsWith('A)')) {
                button.classList.add('wrong');
            }
        });

        if (chancesA1 === 0) {
            showGameOver("adventure1");
        }
        
    } else if (answer === 'correct') {
        correctAnsweredPagesA1.add(currentPage);
        messageContainer.innerHTML = `<p>Resposta correta!</p><p>A janela foi quebrada de dentro para fora.</p>`;
        document.getElementById('adventure1-page-4').appendChild(messageContainer);

        questionButtons.forEach((button) => {
            if (button.innerText.startsWith('B)')) {
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
        nextButton.onclick = () => goToPage('adventure1-page-4', 'adventure1-page-5');
        messageContainer.appendChild(nextButton);
    }

    if (answer !== 'correct') {
        setTimeout(() => messageContainer.remove(), 5000);
    }
}

// Função para lidar com a resposta da página 5
function handleAnswerPage5(answer) {
    const currentPage = 'adventure1-page-5';

    // Se a página já foi respondida corretamente, não faz mais nada
    if (correctAnsweredPagesA1.has(currentPage)) return;

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
        chancesA1 --; // Reduz uma chance
        messageContainer.innerHTML = `<p>Resposta errada!</p><p>Você perdeu uma chance. Restam ${chancesA1} chances.</p>`;
        document.getElementById(currentPage).appendChild(messageContainer);

        // Marca o botão errado como vermelho
        questionButtons.forEach((button) => {
            if (button.innerText.startsWith('B)')) {
                button.classList.add('wrong');
            }
        });

        if (chancesA1 === 0) {
            showGameOver("adventure1");
        }
        
    } else if (answer === 'correct') {
        correctAnsweredPagesA1.add(currentPage); // Marca a página como respondida corretamente
        messageContainer.innerHTML = `
            <p>Resposta correta!</p>
            <p>A tempestade teria abafado o som. Ela pode estar escondendo algo.</p>
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
        nextButton.onclick = () => goToPage(currentPage, 'adventure1-page-6');
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
function handleAnswerPage6(answer) {
    const currentPage = 'adventure1-page-6';

    // Se a página já foi respondida corretamente, não faz mais nada
    if (correctAnsweredPagesA1.has(currentPage)) return;

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
        chancesA1 --; // Reduz uma chance
        messageContainer.innerHTML = `<p>Resposta errada!</p><p>Você perdeu uma chance. Restam ${chancesA1} chances.</p>`;
        document.getElementById(currentPage).appendChild(messageContainer);

        // Marca o botão errado como vermelho
        questionButtons.forEach((button) => {
            if (button.innerText.startsWith('B)')) {
                button.classList.add('wrong');
            }
        });

        if (chancesA1 === 0) {
            showGameOver("adventure1");
        }        
    
    } else if (answer === 'correct') {
        correctAnsweredPagesA1.add(currentPage); // Marca a página como respondida corretamente
        messageContainer.innerHTML = `
            <p>Resposta correta!</p>
            <p>Alguém já havia pegado o punhal antes do crime acontecer.</p>
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
        nextButton.onclick = () => goToPage(currentPage, 'adventure1-page-7');
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
function handleAnswerPage7(answer) {
    const currentPage = 'adventure1-page-7';

    // Se a página já foi respondida corretamente, não faz mais nada
    if (correctAnsweredPagesA1.has(currentPage)) return;

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
        chancesA1--; // Reduz uma chance
        messageContainer.innerHTML = `<p>Resposta errada!</p><p>Você perdeu uma chance. Restam ${chancesA1} chances.</p>`;
        document.getElementById(currentPage).appendChild(messageContainer);

        // Marca o botão errado como vermelho
        questionButtons.forEach((button) => {
            if (button.innerText.startsWith('A)')) {
                button.classList.add('wrong');
            }
        });
        
        if (chancesA1 === 0) {
            showGameOver("adventure1");
        }
        
    } else if (answer === 'correct') {
        correctAnsweredPagesA1.add(currentPage); // Marca a página como respondida corretamente
        messageContainer.innerHTML = 
        `<p>Resposta correta!</p>
        <p>A herança era o motivo.</p>`;
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
        nextButton.onclick = () => goToPage(currentPage, 'adventure1-page-8');
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
function handleAnswerPage9(answer) {
    const currentPage = 'adventure1-page-9';

    // Se a página já foi respondida corretamente, não faz mais nada
    if (correctAnsweredPagesA1.has(currentPage)) return;

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
        chancesA1--; // Reduz uma chance
        messageContainer.innerHTML = `<p>Resposta errada!</p><p>Você perdeu uma chance. Restam ${chancesA1} chances.</p>`;
        document.getElementById(currentPage).appendChild(messageContainer);

        // Marca o botão errado como vermelho
        questionButtons.forEach((button) => {
            if (button.innerText.startsWith('B)')) {
                button.classList.add('wrong');
            }
        });

        if (chancesA1 === 0) {
            showGameOver("adventure1");
        }

    } else if (answer === 'correct') {
        correctAnsweredPagesA1.add(currentPage); // Marca a página como respondida corretamente
        messageContainer.innerHTML = 
        `<p>Resposta correta!</p>
        <p>O verdadeiro assassino é o Sr. Graves! Ele queria a herança e tramou tudo para incriminar a governanta.</p>`;
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
        nextButton.onclick = () => goToPage(currentPage, 'adventure1-page-10');
        messageContainer.appendChild(nextButton);
    }

    // Remove a mensagem após 5 segundos (apenas se não for a resposta correta)
    if (answer !== 'correct') {
        setTimeout(() => {
            messageContainer.remove();
        }, 5000);
    }
}