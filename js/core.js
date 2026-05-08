document.addEventListener('DOMContentLoaded', () => {

    document.body.addEventListener('click', function(e) {
        const anchor = e.target.closest('a[href^="#"]');
        if (anchor) {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    new bootstrap.Collapse(navbarCollapse).hide();
                }
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetElements = entry.target.querySelectorAll('.state-element-hidden');
                targetElements.forEach((element, index) => {
                    setTimeout(() => {
                        element.classList.add('state-element-visible');
                    }, index * 100);
                });
            }
        });
    }, { threshold: 0.2, rootMargin: '0px 0px -10% 0px' });

    window.refreshAnimations = () => {
        observer.disconnect();
        document.querySelectorAll('.layout-scroll-section').forEach(sec => observer.observe(sec));
    };
});