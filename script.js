// script.js corporativo premium: animações, shrink de header, parallax e smooth scroll
document.addEventListener('DOMContentLoaded', () => {
    // ================= INTERSECTION OBSERVER PARA ANIMAÇÕES =================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const animateObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                el.classList.add('in-view');
                observer.unobserve(el);
            }
        });
    }, observerOptions);

    const animatedEls = document.querySelectorAll('[data-animate]');
    animatedEls.forEach((el, index) => {
        // delay leve em cascata
        const baseDelay = 0.05;
        const maxDelay = 0.4;
        const delay = Math.min(index * baseDelay, maxDelay);
        el.style.setProperty('--delay', delay.toString() + 's');
        animateObserver.observe(el);
    });

    // ================= HEADER SHRINK E PARALLAX =================
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateHeader = () => {
        const currentY = window.scrollY;
        
        if (!header) return;

        // Header shrink
        if (currentY > 60) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }

        // Parallax leve no hero
        const hero = document.querySelector('.hero');
        if (hero) {
            const factor = 0.2;
            const offset = currentY * factor;
            hero.style.transform = `translateY(${(offset * -0.02).toFixed(2)}px)`;
        }

        lastScrollY = currentY;
        ticking = false;
    };

    const onScroll = () => {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Executar uma vez para estado inicial
    updateHeader();

    // ================= SMOOTH SCROLL PARA LINKS ÂNCORA =================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ================= MELHORIA DE PERFORMANCE =================
    // Debounce para eventos de resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Recálculos necessários no resize
        }, 250);
    });

    // ================= INTERATIVIDADE ADICIONAL =================
    // Efeito de destaque nos cards ao passar o mouse
    document.querySelectorAll('.service-card, .why-item').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '';
        });
    });

    // Feedback visual para clique nos botões
    document.querySelectorAll('.btn-primary, .btn-secondary, .nav-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Efeito de ripple
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: ripple 0.6s linear;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Adicionar estilos CSS para o efeito ripple
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    console.log('S&M Consultoria TI - Script carregado com sucesso!');
});