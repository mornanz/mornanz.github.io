document.addEventListener('DOMContentLoaded', () => {
    
    const pageData = {
        pl: [
            { id: "intro", bg: "", t: "h1", tc: "display-3 fw-bold", title: "Kamil Drzewiecki", desc: "CS major focused on Computer Graphics & Design<br>Polish Localization Lead at the One Pace Project", bt: "Personal", bu: "personal.html", bc: "btn-outline-light" },
            { id: "github", bg: "modifier-background-overlay", t: "h2", tc: "display-5 fw-bold", title: "GitHub Repository", desc: "Prowadzone przez lata projekty GitHub.", bt: "View Source", bu: "https://github.com/mornanz", bc: "btn-outline-light", target: "_blank" },
            { id: "commercial", bg: "", t: "h2", tc: "display-5 fw-bold", title: "Commercial Portfolio", desc: "Rozwiązania komercyjne i wykonane zlecenia.", bt: "Explore Case Studies", bu: "commercial.html", bc: "btn-primary" },
            { id: "hobby", bg: "", t: "h2", tc: "display-5 fw-bold", title: "Personal Endeavors", desc: "Udział własny w projektach nieodpłatnych.", bt: "Discover More", bu: "hobby.html", bc: "btn-primary" }
        ],
        en: [
            { id: "intro", bg: "", t: "h1", tc: "display-3 fw-bold", title: "Kamil Drzewiecki", desc: "CS major focused on Computer Graphics & Design<br>Polish Localization Lead at the One Pace Project", bt: "Personal", bu: "personal.html", bc: "btn-outline-light" },
            { id: "github", bg: "modifier-background-overlay", t: "h2", tc: "display-5 fw-bold", title: "GitHub Repository", desc: "GitHub projects maintained over the years.", bt: "View Source", bu: "https://github.com/mornanz", bc: "btn-outline-light", target: "_blank" },
            { id: "commercial", bg: "", t: "h2", tc: "display-5 fw-bold", title: "Commercial Portfolio", desc: "Commercial solutions and completed commissions.", bt: "Explore Case Studies", bu: "commercial.html", bc: "btn-primary" },
            { id: "hobby", bg: "", t: "h2", tc: "display-5 fw-bold", title: "Personal Endeavors", desc: "Personal involvement in non-profit projects.", bt: "Discover More", bu: "hobby.html", bc: "btn-primary" }
        ]
    };

    const wrapper = document.getElementById('dynamic-sections-wrapper');
    if (!wrapper) return;

    const render = (lang) => {
        const data = pageData[lang] || pageData.pl;
        
        wrapper.innerHTML = data.map((s, index) => {
            const isLast = index === data.length - 1;
            const footerHtml = isLast ? `
                <footer class="component-footer-page position-absolute bottom-0 w-100 py-3 text-center z-3">
                    <p class="small mb-0 opacity-50 text-white">© 2026 GitHub Pages Portfolio • Built with Bootstrap 5</p>
                </footer>
            ` : '';

            return `
                <section id="${s.id}" class="layout-scroll-section position-relative d-flex align-items-center ${s.bg}">
                    <div class="container text-center state-element-hidden">
                        <${s.t} class="${s.tc}">${s.title}</${s.t}>
                        <p class="mt-3 lead mx-auto utility-limit-width">${s.desc}</p>
                        <a href="${s.bu}" ${s.target ? 'target="_blank"' : ''} class="btn ${s.bc} btn-lg mt-4 px-5">${s.bt}</a>
                    </div>
                    ${footerHtml}
                </section>
            `;
        }).join('');

        if (window.refreshAnimations) window.refreshAnimations();
    };

    window.addEventListener('languageChanged', (e) => render(e.detail.language));
    render(localStorage.getItem('site_lang') || 'pl');
});