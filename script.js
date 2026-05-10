document.addEventListener('DOMContentLoaded', () => {
    // ---- PRELOADER ----
    // Simula o tempo de carregamento da página e prepara para o futuro vídeo
    const preloader = document.getElementById('preloader');
    
    // Tempo simulado de carregamento (2.5 segundos para demonstrar a tela)
    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
    }, 2500);

    // ---- EFEITO NO HEADER AO ROLAR A PÁGINA ----
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ---- ROLAGEM SUAVE (SMOOTH SCROLL) ----
    const navLinks = document.querySelectorAll('.nav-links a, .cta-button');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Verifica se o href começa com '#' (é um link âncora)
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    // Calcula a posição considerando o header fixo
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
