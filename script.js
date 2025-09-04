document.addEventListener('DOMContentLoaded', () => {

    // --- DARK MODE TOGGLE ---
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const toggleIcon = darkModeToggle.querySelector('i');

    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        toggleIcon.classList.replace('fa-moon', 'fa-sun');
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
        toggleIcon.classList.replace(isDarkMode ? 'fa-moon' : 'fa-sun', isDarkMode ? 'fa-sun' : 'fa-moon');
    });

    // --- TYPING EFFECT ---
    if (document.querySelector('.typing')) {
        new Typed('.typing', {
            strings: ['Frontend Developer', 'UI/UX Enthusiast', 'Web Designer'],
            typeSpeed: 70,
            backSpeed: 60,
            loop: true
        });
    }

    // --- ACTIVE NAV LINK ON SCROLL ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // --- SCROLL ANIMATIONS (INTERSECTION OBSERVER) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Staggered animation for children
                if (entry.target.classList.contains('stagger-children')) {
                    const children = entry.target.querySelectorAll(':scope > *');
                    children.forEach((child, index) => {
                        child.style.setProperty('--stagger-delay', `${index * 150}ms`);
                    });
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
    
    // --- BACK TO TOP BUTTON ---
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

});