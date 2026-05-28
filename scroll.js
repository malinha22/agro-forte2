// SCROLL SUAVE DOS LINKS

const links = document.querySelectorAll('.menu a');

links.forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const id = this.getAttribute('href');
        const secao = document.querySelector(id);

        secao.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    });

});


// MENU MUDA AO ROLAR

const topo = document.querySelector('.topo');

window.addEventListener('scroll', () => {

    if(window.scrollY > 50){

        topo.style.background = '#163828';
        topo.style.padding = '15px 8%';
        topo.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';

    } else {

        topo.style.background = 'rgba(20, 60, 40, 0.9)';
        topo.style.padding = '20px 8%';
        topo.style.boxShadow = 'none';

    }

});


// BOTÃO VOLTAR AO TOPO

const botaoTopo = document.getElementById('botao-topo');

window.addEventListener('scroll', () => {

    if(window.scrollY > 300){

        botaoTopo.style.opacity = '1';
        botaoTopo.style.visibility = 'visible';

    } else {

        botaoTopo.style.opacity = '0';
        botaoTopo.style.visibility = 'hidden';

    }

});


// VOLTAR AO TOPO

botaoTopo.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

});