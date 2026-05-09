document.addEventListener('DOMContentLoaded', () => {
    
    const pageData = {
        pl: [
            {
                id: "gaming", imgSrc: "assets/hobby-translation.png", title: "Tłumaczenie & Lokalizacja",
                desc: "Aktywny udział w społecznościach fanowskich anime, ze szczególnym naciskiem na tłumaczenie w popularnym projekcie One Pace. Praca nad dostarczaniem poprawnie językowo i jakościowo lokalizowanych napisów.",
                listTitle: "Zadania powiązane z projektami:", listItems: ["Aktywny udział w społeczności", "Analiza kontekstu kulturowego", "Standaryzacja nazewnictwa", "Kontrola jakości lokalizacji"], button: null
            },
            {
                id: "anime", imgSrc: "assets/hobby-remux.png", title: "Produkcja Audiowizualna",
                desc: "Korzystanie z narzędzi umożliwiających dostarczanie i tworzenie produkcji audiowizualnych, przede wszystkim programów tłumaczeniowych, a także modyfikacji, repackowania i remuxowania wideo.",
                listTitle: "Charakterystyka wykonywanej przeze mnie pracy:", listItems: ["MUX & Repack, Hybrid / MKVToolnix / Handbrake", "Tłumaczenie i lokalizacja, Aegisub / SubtitleEdit", "Przekład z Japońskiego / Angielskiego", "Zaangażowanie w pracę zespołową"], button: { text: "Odwiedź One Pace", url: "https://onepace.net" }
            },
            {
                id: "video", imgSrc: "assets/hobby-video.png", title: "Edycja Wideo & TV",
                desc: "Montaż wideo i postprodukcja. Praca z oprogramowaniem do edycji wideo, efektami specjalnymi i kompresją. Hobbystyczne tworzenie \"mock\" wersji ramówek TV. Edycja klipów w połączeniu z muzyką w stylu MAD / AMV.",
                listTitle: "Techniki i specyfika produkcji:", listItems: ["Początek z Camtasia Studio w latach szkoły podstawowej", "Wieloletni montaż z użyciem VEGAS Pro + Pluginów", "Wpasowany w trendy montaż programem CapCut", "Produkcja pseudo-brandingu i ramówek TV"], button: null
            },
            {
                id: "coding", imgSrc: "assets/hobby-archive.png", title: "Archiwizacja & Kreatywność",
                desc: "Tworzenie materiałów wideo na platformę YouTube z archiwalnymi zapisami programów, głównie Anime z czasów emisji w polskich stacjach telewizyjnych, a także wizualizacji i miniatur do filmów.",
                listTitle: null, listItems: [], button: { text: "Zobacz przykłady", url: "https://www.youtube.com/@SzefLimak" }
            }
        ],
        en: [
            {
                id: "gaming", imgSrc: "assets/hobby-translation.png", title: "Translation & Localization",
                desc: "Active participation in anime fan communities, with a specific focus on translation for the popular One Pace project. Delivering linguistically accurate and high-quality localized subtitles.",
                listTitle: "Project-related tasks:", listItems: ["Active community engagement", "Cultural context analysis", "Terminology standardization", "Localization quality control"], button: null
            },
            {
                id: "anime", imgSrc: "assets/hobby-remux.png", title: "Audiovisual Production",
                desc: "Utilizing tools for delivering and creating audiovisual productions, primarily translation software, as well as video modification, repackaging, and remuxing.",
                listTitle: "Characteristics of my work:", listItems: ["MUX & Repack, Hybrid / MKVToolnix / Handbrake", "Translation and localization, Aegisub / SubtitleEdit", "Japanese / English translation", "Commitment to teamwork"], button: { text: "Visit One Pace", url: "https://onepace.net" }
            },
            {
                id: "video", imgSrc: "assets/hobby-video.png", title: "Video Editing & TV",
                desc: "Video editing and post-production. Working with video editing software, special effects, and compression. Hobbyist creation of \"mock\" TV broadcast schedules. Editing music-synced clips (MAD / AMV style).",
                listTitle: "Techniques and specifics:", listItems: ["Started with Camtasia Studio in elementary school", "Long-term editing using VEGAS Pro + Plugins", "Trend-adjusted editing with CapCut", "Production of pseudo-branding and TV schedules"], button: null
            },
            {
                id: "coding", imgSrc: "assets/hobby-archive.png", title: "Archiving & Creativity",
                desc: "Creating video materials for YouTube featuring archival recordings, mostly Anime from the era of Polish television broadcasts, as well as creating visualizations and thumbnails.",
                listTitle: null, listItems: [], button: { text: "See examples", url: "https://www.youtube.com/@SzefLimak" }
            }
        ]
    };

    const wrapper = document.getElementById('dynamic-sections-wrapper');
    if (!wrapper) return;

    const renderSections = (lang) => {
        const data = pageData[lang] || pageData['pl'];
        let htmlContent = '';

        data.forEach((section, index) => {
            const isAlternate = index % 2 !== 0; 
            const bgClass = isAlternate ? 'modifier-background-overlay' : '';
            const imgOrderClass = isAlternate ? 'order-lg-2' : '';
            const textOrderClass = isAlternate ? 'order-lg-1' : '';

            const isLast = index === data.length - 1;
            const footerHtml = isLast ? `
                <footer class="component-footer-page position-absolute bottom-0 w-100 py-3 text-center z-3">
                    <p class="small mb-0 opacity-50 text-white">© 2026 GitHub Pages Portfolio • Built with Bootstrap 5</p>
                </footer>
            ` : '';

            let listHtml = '';
            if (section.listTitle && section.listItems.length > 0) {
                const items = section.listItems.map(item => `<li class="mb-2">${item}</li>`).join('');
                listHtml = `
                    <div class="mb-4">
                        <h3 class="h5 fw-bold mb-3">${section.listTitle}</h3>
                        <ul class="list-unstyled">${items}</ul>
                    </div>`;
            }

            // TUTAJ ZMIANA: z btn-outline-light na btn-primary
            const buttonHtml = section.button 
                ? `<a href="${section.button.url}" target="_blank" class="btn btn-primary btn-lg mt-3 px-5">${section.button.text}</a>` 
                : '';

            htmlContent += `
                <section id="${section.id}" class="layout-scroll-section position-relative d-flex align-items-center ${bgClass}">
                    <div class="container">
                        <div class="row align-items-center g-5">
                            <div class="col-lg-5 ${imgOrderClass}">
                                <div class="component-hobby-image-wrapper">
                                    <div class="aspect-ratio-5-3">
                                        <img src="${section.imgSrc}" alt="${section.title}" class="img-fluid component-hobby-image">
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-7 ${textOrderClass}">
                                <div class="state-element-hidden">
                                    <h2 class="display-5 fw-bold mb-4">${section.title}</h2>
                                    <p class="lead mb-4">${section.desc}</p>
                                    ${listHtml}
                                    ${buttonHtml}
                                </div>
                            </div>
                        </div>
                    </div>
                    ${footerHtml}
                </section>
            `;
        });

        wrapper.innerHTML = htmlContent;

        if (window.refreshAnimations) window.refreshAnimations();
    };

    window.addEventListener('languageChanged', (event) => renderSections(event.detail.language));
    renderSections(localStorage.getItem('site_lang') || 'pl');
});