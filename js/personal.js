document.addEventListener('DOMContentLoaded', () => {

    const pageData = {
        pl: {
            about: {
                title: "O mnie",
                p1: "Jestem studentem Informatyki specjalizującym się w Grafice Komputerowej i Projektowaniu. Pasję do technologii łączę z zainteresowaniem psychologią odbioru, wpływem emocji i sposobem, w jaki przekaz artystyczny oddziałuje na widza.",
                p2: "Interesuje mnie nie tylko tworzenie wizualnych projektów, lecz także istota przedstawiania dzieła - od produkcji audiowizualnych, przez dubbing i grę aktorską, po projektowanie doświadczeń, które angażują emocje odbiorcy.",
                tags: ["Computer Graphics", "Translation", "Localization", "Video Editing"]
            },
            education: {
                title: "Edukacja & Doświadczenie", subtitle: "Ścieżka akademicka i rozwój zawodowy",
                items: [
                    { icon: "🎓", title: "Informatyka - Szkoła Średnia", org: "Zespół Szkół Morskich", years: "2018 - 2022", desc: "Konserwacja sprzętu komputerowego, administracja systemami oraz siecią komputerową, podstawy programowania języków kompilowanych oraz WebDev." },
                    { icon: "🎓", title: "Informatyka - Studia Inżynierskie", org: "Politechnika Morska w Szczecinie", years: "2022 - obecnie", desc: "Pogłębianie wiedzy z zagadnień programowania, projektowania aplikacji, modelowania systemów oraz rozwiązywania problemów inżynierskich z dziedziny elektroniki i automatyki." },
                    { icon: "💼", title: "Zlecenia i Freelancing", org: "CRMdlakazdego oraz klienci pośredni", years: "2025 - obecnie", desc: "Realizacja projektów graficznych, Marketing Design oraz pozostałe zagadnienia dziedziny grafiki komputerowej dla różnych klientów." },
                    { icon: "🌐", title: "Polish Localization Lead", org: "One Pace Project", years: "2025 - obecnie", desc: "Tłumaczenie i lokalizacja oparta na standaryzacji oraz jakościowym podejściu do przekładu na język polski." }
                ]
            },
            skills: {
                title: "Umiejętności & Technologie", subtitle: "Przykładowe narzędzia i technologie, którymi się posługuję",
                items: [
                    { icon: "🎨", title: "Design & Grafika", list: ["Affinity / GIMP", "Adobe Photoshop", "Blender / Unity 3D"] },
                    { icon: "💻", title: "Development", list: ["HTML / CSS / JS", "C++ / C# / Assembly", "PHP / SQL / MS Azure"] },
                    { icon: "🎬", title: "Montaż wideo", list: ["Camtasia Studio", "Adobe After Effects", "Capcut / VEGAS PRO"] },
                    { icon: "⚙️", title: "Pozostałe narzędzia", list: ["LOGO! Software", "MATLAB / Simulink", "Aegisub / SubtitleEdit"] }
                ]
            },
            contact: {
                title: "Kontakt & Linki", subtitle: "Skontaktuj się ze mną lub sprawdź moje aktywności",
                cTitle: "Dane kontaktowe", aTitle: "Dostępność",
                aDesc: "Otwarty na współpracę przy projektach związanych z grafiką komputerową, lokalizacją i przekładem na język Polski.", btn: "Wyślij wiadomość"
            }
        },
        en: {
            about: {
                title: "About Me",
                p1: "I am a Computer Science student specializing in Computer Graphics and Design. I combine my passion for technology with an interest in the psychology of perception, the impact of emotions, and the way artistic expression affects the viewer.",
                p2: "I am interested not only in creating visual projects but also in the essence of presenting a work - from audiovisual productions, through dubbing and voice acting, to designing experiences that engage the audience's emotions.",
                tags: ["Computer Graphics", "Translation", "Localization", "Video Editing"]
            },
            education: {
                title: "Education & Background", subtitle: "Academic path and professional development",
                items: [
                    { icon: "🎓", title: "IT - High School", org: "Zespół Szkół Morskich", years: "2018 - 2022", desc: "Computer hardware maintenance, system and network administration, basics of compiled programming languages and WebDev." },
                    { icon: "🎓", title: "Computer Science - BSc", org: "Maritime University of Szczecin", years: "2022 - present", desc: "Deepening knowledge in programming, application design, system modeling, and solving engineering problems in electronics and automation." },
                    { icon: "💼", title: "Commissions and Freelancing", org: "CRMdlakazdego and indirect clients", years: "2025 - present", desc: "Execution of graphic projects, Marketing Design, and other computer graphics related tasks for various clients." },
                    { icon: "🌐", title: "Polish Localization Lead", org: "One Pace Project", years: "2025 - present", desc: "Translation and localization based on standardization and a qualitative approach to Polish translation." }
                ]
            },
            skills: {
                title: "Skills & Technologies", subtitle: "Example tools and technologies I use",
                items: [
                    { icon: "🎨", title: "Design & Graphics", list: ["Affinity / GIMP", "Adobe Photoshop", "Blender / Unity 3D"] },
                    { icon: "💻", title: "Development", list: ["HTML / CSS / JS", "C++ / C# / Assembly", "PHP / SQL / MS Azure"] },
                    { icon: "🎬", title: "Video Editing", list: ["Camtasia Studio", "Adobe After Effects", "Capcut / VEGAS PRO"] },
                    { icon: "⚙️", title: "Other tools", list: ["LOGO! Software", "MATLAB / Simulink", "Aegisub / SubtitleEdit"] }
                ]
            },
            contact: {
                title: "Contact & Links", subtitle: "Get in touch with me or check out my activities",
                cTitle: "Contact Details", aTitle: "Availability",
                aDesc: "Open to cooperation on projects related to computer graphics, localization, and Polish translation.", btn: "Send a message"
            }
        }
    };

    const wrapper = document.getElementById('dynamic-sections-wrapper');
    if (!wrapper) return;

    const render = (lang) => {
        const d = pageData[lang] || pageData.pl;
        
        const tagsHtml = d.about.tags.map(tag => `<span class="badge bg-component-tag">${tag}</span>`).join('');
        const sectionAbout = `
            <section id="about" class="layout-scroll-section d-flex align-items-center">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                            <div class="component-image-frame text-center">
                                <img src="assets/personal-photo.jpg" alt="Kamil Drzewiecki" class="img-fluid rounded-circle component-profile-image">
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-6 text-center text-md-start">
                            <div class="state-element-hidden">
                                <h1 class="display-4 fw-bold mb-4">${d.about.title}</h1>
                                <p class="lead mb-4">${d.about.p1}</p>
                                <p class="mb-4">${d.about.p2}</p>
                                <div class="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">${tagsHtml}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;

        const eduBoxes = d.education.items.map(item => `
            <div class="col-md-6 col-lg-6">
                <div class="component-card-education state-element-hidden">
                    <div class="component-education-icon mb-3"><span class="display-6">${item.icon}</span></div>
                    <h3 class="h5 fw-bold mb-2">${item.title}</h3>
                    <p class="text-muted-light mb-1">${item.org}</p>
                    <p class="small opacity-75 mb-3">${item.years}</p>
                    <p class="mb-0">${item.desc}</p>
                </div>
            </div>
        `).join('');
        const sectionEdu = `
            <section id="education" class="layout-scroll-section d-flex align-items-center modifier-background-overlay">
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center mb-5">
                            <div class="state-element-hidden">
                                <h2 class="display-5 fw-bold mb-4">${d.education.title}</h2>
                                <p class="lead-subtitle mx-auto utility-limit-width">${d.education.subtitle}</p>
                            </div>
                        </div>
                    </div>
                    <div class="row g-4">${eduBoxes}</div>
                </div>
            </section>
        `;

        const skillBoxes = d.skills.items.map(item => {
            const listHtml = item.list.map(li => `<li class="mb-2">${li}</li>`).join('');
            return `
            <div class="col-md-6 col-lg-3">
                <div class="component-skill-card text-center state-element-hidden">
                    <div class="component-skill-icon mb-4"><span class="display-6">${item.icon}</span></div>
                    <h3 class="h5 fw-bold mb-3">${item.title}</h3>
                    <ul class="list-unstyled">${listHtml}</ul>
                </div>
            </div>`;
        }).join('');
        const sectionSkills = `
            <section id="skills" class="layout-scroll-section d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center mb-5">
                            <div class="state-element-hidden">
                                <h2 class="display-5 fw-bold mb-4">${d.skills.title}</h2>
                                <p class="lead-subtitle mx-auto utility-limit-width">${d.skills.subtitle}</p>
                            </div>
                        </div>
                    </div>
                    <div class="row g-4">${skillBoxes}</div>
                </div>
            </section>
        `;

        const sectionContact = `
            <section id="contact" class="layout-scroll-section d-flex align-items-center modifier-background-overlay position-relative">
                <div class="container pb-5">
                    <div class="row">
                        <div class="col-12 text-center mb-5">
                            <div class="state-element-hidden">
                                <h2 class="display-5 fw-bold mb-4">${d.contact.title}</h2>
                                <p class="lead-subtitle mx-auto utility-limit-width">${d.contact.subtitle}</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 mx-auto">
                            <div class="component-contact-card state-element-hidden">
                                <div class="row g-4">
                                    <div class="col-md-6">
                                        <h3 class="h5 fw-bold mb-4">${d.contact.cTitle}</h3>
                                        <ul class="list-unstyled">
                                            <li class="mb-3 d-flex align-items-center"><span class="me-3">📧</span><span>drzewieckibiz@gmail.com</span></li>
                                            <li class="mb-3 d-flex align-items-center"><span class="me-3">👔</span><span><a href="https://www.linkedin.com/in/kamil-drzewiecki-biz/" class="text-decoration-none" target="_blank">LinkedIn</a></span></li>
                                            <li class="mb-3 d-flex align-items-center"><span class="me-3">💾</span><span><a href="https://github.com/mornanz" class="text-decoration-none" target="_blank">GitHub</a></span></li>
                                        </ul>
                                    </div>
                                    <div class="col-md-6">
                                        <h3 class="h5 fw-bold mb-4">${d.contact.aTitle}</h3>
                                        <p class="mb-4">${d.contact.aDesc}</p>
                                        <a href="mailto:drzewieckibiz@gmail.com" class="btn btn-primary">${d.contact.btn}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <footer class="component-footer-page position-absolute bottom-0 start-0 end-0 py-3 text-center">
                    <p class="small mb-0 opacity-50 text-white">© 2026 GitHub Pages Portfolio • Built with Bootstrap 5</p>
                </footer>
            </section>
        `;

        wrapper.innerHTML = sectionAbout + sectionEdu + sectionSkills + sectionContact;

        if (window.refreshAnimations) window.refreshAnimations();
    };

    window.addEventListener('languageChanged', (e) => render(e.detail.language));
    render(localStorage.getItem('site_lang') || 'pl');
});