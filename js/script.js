const translations = {
    es: {
        'about-me-nav': '<i class="fas fa-user-edit"></i> Sobre mi',
        'contact-nav': '<i class="far fa-address-book"></i> Contacto',
        'presentation-h1': 'Hola!',
        'presentation-h3': 'Mi nombre es Eduardo',
        'presentation-h4': 'Soy de Chile y soy ingeniero en informática',
        'about-me-btn': 'Acerca de mí',
        'tools-h1': 'Algunos de los lenguajes y tecnologías que he utilizado',
        'projects-h1': 'Proyectos en los que he trabajado',
        'project-1-desc-1': 'Proyecto de portafolio de título.',
        'project-1-desc-2': 'Lenguajes y herramientas utilizadas: PHP - MySQL.',
        'project-2-desc-1': 'Proyecto de minería de datos.',
        'project-2-desc-2': 'Lenguajes y herramientas utilizadas: Python - Jupyter Notebook.',
        'project-3-desc-1': 'Proyecto de Deep Learning.',
        'project-3-desc-2': 'Lenguajes y herramientras utilizadas: Python - Jupyter Notebook.',
        'project-4-desc-1': 'Proyecto de Machine Learning.',
        'project-4-desc-2': 'Lenguajes y herramientras utilizadas: Python - Jupyter Notebook.',
        'project-5-desc-1': 'Proyecto de desarrollo web con framework.',
        'project-5-desc-2': 'Lenguajes utilizados: HTML5 - CSS - Javascript - Python.',
        'project-6-desc-1': 'Proyecto de autoservicio en farmacias.',
        'project-6-desc-2': 'Lenguajes y herramientas utilizadas: Java - MySQL.',
        'social-h1': 'Redes sociales',
        'more-info': '<i class="fa-brands fa-github"></i> Más información'
    },
    en: {
        'about-me-nav': '<i class="fas fa-user-edit"></i> About me',
        'contact-nav': '<i class="far fa-address-book"></i> Contact',
        'presentation-h1': 'Hello!',
        'presentation-h3': 'My name is Eduardo',
        'presentation-h4': "I'm from Chile and I am a computer engineer",
        'about-me-btn': 'About me',
        'tools-h1': 'Some of the languages and technologies that I used',
        'projects-h1': 'Projects I have worked on',
        'project-1-desc-1': 'Final career project.',
        'project-1-desc-2': 'Made with: Laravel PHP - MySQL.',
        'project-2-desc-1': 'Data mining project.',
        'project-2-desc-2': 'Made with: Python - Jupyter Notebook.',
        'project-3-desc-1': 'Deep Learning project.',
        'project-3-desc-2': 'Made with: Python - Jupyter Notebook.',
        'project-4-desc-1': 'Machine learning project using supervised analysis.',
        'project-4-desc-2': 'Made with: Python - Jupyter Notebook.',
        'project-5-desc-1': 'Web Dev with framework project.',
        'project-5-desc-2': 'Made with: HTML5 - CSS - Javascript - Python.',
        'project-6-desc-1': 'Autoservice project in pharmacies.',
        'project-6-desc-2': 'Made with: Java - MySQL.',
        'social-h1': 'Social networks',
        'more-info': '<i class="fa-brands fa-github"></i> More information'
    }
};

function changeLanguage(lang) {
    localStorage.setItem('lang', lang);
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Check if the content contains HTML tags
            if (translations[lang][key].includes('<')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.innerText = translations[lang][key];
            }
        }
    });

    // Update Flag visibility or style if needed, 
    // though in this case both flags are always visible.
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'es';
    changeLanguage(savedLang);
});
