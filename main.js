document.addEventListener('DOMContentLoaded', () => {

    // EFEITO NOS CARDS

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {

        card.addEventListener('mouseenter', () => {

            card.style.transform = 'translateY(-15px)';

        });

        card.addEventListener('mouseleave', () => {

            card.style.transform = 'translateY(0px)';

        });

    });

});