// ANIMAÇÃO DOS CARDS AO PASSAR O MOUSE

const cards = document.querySelectorAll('.card');

cards.forEach(card => {

    card.addEventListener('mouseenter', () => {

        card.style.transform = 'scale(1.05)';
        card.style.transition = '0.3s';

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform = 'scale(1)';

    });

});


// ANIMAÇÃO NAS IMAGENS DAS PLANTAS

const imagens = document.querySelectorAll('.planta-card img');

imagens.forEach(img => {

    img.addEventListener('mouseenter', () => {

        img.style.transform = 'scale(1.1)';
        img.style.transition = '0.4s';

    });

    img.addEventListener('mouseleave', () => {

        img.style.transform = 'scale(1)';

    });

});


// MENSAGEM NO CONSOLE

console.log("Projeto EcoAllelo carregado com sucesso!");