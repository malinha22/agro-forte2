document.addEventListener('DOMContentLoaded', () => {

    // SCROLL SUAVE

    const links = document.querySelectorAll('.menu a');

    links.forEach(link => {

        link.addEventListener('click', function(e){

            e.preventDefault();

            const id = this.getAttribute('href');

            const secao = document.querySelector(id);

            secao.scrollIntoView({
                behavior:'smooth'
            });

        });

    });

    // BOTÃO TOPO

    const topoBtn = document.getElementById('topoBtn');

    window.addEventListener('scroll', () => {

        if(window.scrollY > 300){

            topoBtn.style.opacity = '1';
            topoBtn.style.visibility = 'visible';

        } else {

            topoBtn.style.opacity = '0';
            topoBtn.style.visibility = 'hidden';

        }

    });

    topoBtn.addEventListener('click', () => {

        window.scrollTo({
            top:0,
            behavior:'smooth'
        });

    });

});