/**
 * Personal Page Controller
 * Manages intersection-based animations for personal page
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Configuration
    const OBSERVER_THRESHOLD = 0.2;
    const OBSERVER_ROOT_MARGIN = '0px 0px -10% 0px';
    
    // Language state - start with Polish flag
    let isEnglish = false;
    
    // Initialize Intersection Observer
    const observerConfig = {
        threshold: OBSERVER_THRESHOLD,
        rootMargin: OBSERVER_ROOT_MARGIN
    };
    
    const handleElementIntersection = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Find all hidden elements in the section
                const targetElements = entry.target.querySelectorAll('.state-element-hidden');
                targetElements.forEach((element, index) => {
                    // Stagger the animations
                    setTimeout(() => {
                        element.classList.add('state-element-visible');
                    }, index * 100);
                });
            }
        });
    };
    
    const scrollObserver = new IntersectionObserver(handleElementIntersection, observerConfig);
    
    // Observe all scroll sections
    document.querySelectorAll('.layout-scroll-section').forEach(section => {
        scrollObserver.observe(section);
    });
    
    // Language toggle functionality - SVG version
    const languageToggleButton = document.getElementById('language-toggle');
    const flagIcon = document.getElementById('language-flag');

    if (languageToggleButton && flagIcon) {
        languageToggleButton.addEventListener('click', () => {
            if (isEnglish) {
                // Change to Polish flag
                flagIcon.src = 'assets/pl_flag.svg';
                flagIcon.alt = 'Polish flag';
                isEnglish = false;
            } else {
                // Change to English flag
                flagIcon.src = 'assets/uk_flag.svg';
                flagIcon.alt = 'British flag';
                isEnglish = true;
            }
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile navbar if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
                
                // Smooth scroll to section
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
});