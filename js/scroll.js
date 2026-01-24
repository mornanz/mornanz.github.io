/**
 * Scroll Animation Controller
 * Manages intersection-based element visibility transitions
 * and language toggle functionality
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Configuration
    const OBSERVER_THRESHOLD = 0.2;
    const OBSERVER_ROOT_MARGIN = '0px 0px -10% 0px';
    
    let isEnglish = false;
    
    // Initialize Intersection Observer
    const observerConfig = {
        threshold: OBSERVER_THRESHOLD,
        rootMargin: OBSERVER_ROOT_MARGIN
    };
    
    const handleElementIntersection = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetElement = entry.target.querySelector('.state-element-hidden');
                if (targetElement) {
                    targetElement.classList.add('state-element-visible');
                }
            }
        });
    };
    
    const scrollObserver = new IntersectionObserver(handleElementIntersection, observerConfig);
    
    // Observe all scroll sections
    document.querySelectorAll('.layout-scroll-section').forEach(section => {
        scrollObserver.observe(section);
    });
    
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
    
});