document.addEventListener('DOMContentLoaded', () => {
    
    // --- Language Toggle Logic ---
    const langToggleBtn = document.getElementById('langToggle');
    const htmlElement = document.documentElement;
    let currentLang = 'ar'; // Default language

    function updateLanguage() {
        const elements = document.querySelectorAll('[data-ar], [data-en]');
        
        elements.forEach(el => {
            if (currentLang === 'ar') {
                el.textContent = el.getAttribute('data-ar');
            } else {
                el.textContent = el.getAttribute('data-en');
            }
        });

        // Update direction and HTML lang attribute
        if (currentLang === 'ar') {
            htmlElement.setAttribute('dir', 'rtl');
            htmlElement.setAttribute('lang', 'ar');
            langToggleBtn.textContent = 'English';
        } else {
            htmlElement.setAttribute('dir', 'ltr');
            htmlElement.setAttribute('lang', 'en');
            langToggleBtn.textContent = 'العربية';
        }
    }

    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        updateLanguage();
    });

    // Initial call to set correct text based on default lang
    updateLanguage();


    // --- Mobile Menu Logic ---
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });


    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            navbar.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
            navbar.style.background = 'rgba(255, 255, 255, 0.85)';
        }
    });
});
