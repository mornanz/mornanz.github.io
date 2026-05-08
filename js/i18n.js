(function() {
    const setLanguage = (lang) => {
        console.log("[i18n] Zmieniam język na:", lang); // Komunikat diagnostyczny
        
        localStorage.setItem('site_lang', lang);
        document.documentElement.lang = lang;

        const flagIcon = document.getElementById('language-flag');
        if (flagIcon) {
            flagIcon.src = lang === 'en' ? 'assets/uk_flag.svg' : 'assets/pl_flag.svg';
            flagIcon.alt = lang === 'en' ? 'British flag' : 'Polish flag';
        } else {
            console.warn("[i18n] Nie znaleziono obrazka z ID #language-flag!");
        }

        const translations = {
            'nav-github': { pl: 'Open Source', en: 'Open Source' },
            'nav-commercial': { pl: 'Komercyjne', en: 'Commercial' },
            'nav-hobby': { pl: 'Dodatkowe', en: 'Additional' }
        };

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[key] && translations[key][lang]) {
                el.textContent = translations[key][lang];
            }
        });

        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
    };

    document.addEventListener('click', (e) => {
        const toggleBtn = e.target.closest('#language-toggle');
        
        if (toggleBtn) {
            e.preventDefault();
            
            const currentLang = localStorage.getItem('site_lang') || 'pl';
            const newLang = currentLang === 'pl' ? 'en' : 'pl';
            
            console.log("[i18n] Wykryto kliknięcie! Przełączam z", currentLang, "na", newLang);
            
            setLanguage(newLang);
        }
    });

    document.addEventListener('DOMContentLoaded', () => {
        const initialLang = localStorage.getItem('site_lang') || 'pl';
        console.log("[i18n] Start strony. Wczytany język:", initialLang);
        setLanguage(initialLang);
    });
})();