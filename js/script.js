const translations = {
    es: {
        'about-me-nav': '<i class="fas fa-user"></i> Sobre mi',
        'tools-nav': '<i class="fas fa-code"></i> Skills',
        'projects-nav': '<i class="fas fa-laptop-code"></i> Proyectos',
        'contact-nav': '<i class="far fa-address-book"></i> Contacto',
        'presentation-h1': 'Hola!',
        'presentation-h3': 'Mi nombre es Eduardo',
        'presentation-h4': 'Soy de Chile y soy Ingeniero en Informática.',
        'presentation-h5': 'Actualmente me desempeño como desarrollador fullstack, principalmente trabajando con React y ASP.NET. En mis tiempos libres me dedico a aprender sobre Linux y desarrollar pequeños proyectos en Python.',
        'about-me-btn': 'Acerca de mí',
        'tools-h1': 'Algunos de los lenguajes y tecnologías que he utilizado',
        'projects-h1': 'Proyectos en los que he trabajado',
        'project-1-desc-1': 'Plataforma web de gestión veterinaria desarrollada como proyecto de título. Permite registrar publicaciones de mascotas en adopción, perdidas o encontradas.',
        'project-1-desc-2': 'Stack: PHP - Laravel - MySQL.',
        'project-2-desc-1': 'Aplicación de escritorio para visualizar y gestionar cámaras IP en tiempo real sobre Linux, con soporte para múltiples streams simultáneos.',
        'project-2-desc-2': 'Stack: Python - OpenCV.',
        'project-3-desc-1': 'Implementación de una red neuronal Feed Forward desde cero, sin librerías de alto nivel, con backpropagation y entrenamiento supervisado.',
        'project-3-desc-2': 'Stack: Python - Jupyter Notebook.',
        'project-4-desc-1': 'Análisis supervisado de datos del Banco Monopoly para predecir resultados mediante algoritmos de clasificación y regresión.',
        'project-4-desc-2': 'Stack: Python - Jupyter Notebook - Scikit-learn.',
        'project-5-desc-1': 'Portal web para reposteros que permite publicar y descubrir recetas, con sistema de usuarios, comentarios y categorías.',
        'project-5-desc-2': 'Stack: Django - Python - HTML5 - CSS - JavaScript.',
        'project-6-desc-1': 'Sistema de autoservicio para farmacias que agiliza la atención al cliente mediante kioscos digitales con gestión de inventario.',
        'project-6-desc-2': 'Stack: Java - MySQL.',
        'social-h1': 'Redes sociales',
        'more-info': '<i class="fa-brands fa-github"></i> Más información',
        'github-btn': 'Ver más en Github <i class="fa-brands fa-github"></i>'
    },
    en: {
        'about-me-nav': '<i class="fas fa-user"></i> About me',
        'tools-nav': '<i class="fas fa-code"></i> Skills',
        'projects-nav': '<i class="fas fa-laptop-code"></i> Projects',
        'contact-nav': '<i class="far fa-address-book"></i> Contact',
        'presentation-h1': 'Hello!',
        'presentation-h3': 'My name is Eduardo',
        'presentation-h4': "I'm from Chile and I am a Computer Engineer.",
        'presentation-h5': 'I currently work as a fullstack developer, mainly using React and ASP.NET. In my free time I enjoy learning about Linux and building small projects with Python.',
        'about-me-btn': 'About me',
        'tools-h1': 'Some of the languages and technologies that I used',
        'projects-h1': 'Projects I have worked on',
        'project-1-desc-1': 'Veterinary management web platform developed as a final career project. It allows you to register posts about pets available for adoption, lost or found.',
        'project-1-desc-2': 'Stack: PHP - Laravel - MySQL.',
        'project-2-desc-1': 'Desktop application to view and manage IP cameras in real time on Linux, with support for multiple simultaneous streams.',
        'project-2-desc-2': 'Stack: Python - OpenCV.',
        'project-3-desc-1': 'Feed Forward neural network built from scratch without high-level libraries, featuring backpropagation and supervised training.',
        'project-3-desc-2': 'Stack: Python - Jupyter Notebook.',
        'project-4-desc-1': 'Supervised analysis of Banco Monopoly data to predict outcomes using classification and regression algorithms.',
        'project-4-desc-2': 'Stack: Python - Jupyter Notebook - Scikit-learn.',
        'project-5-desc-1': 'Web portal for bakers to publish and discover recipes, featuring user accounts, comments and category management.',
        'project-5-desc-2': 'Stack: Django - Python - HTML5 - CSS - JavaScript.',
        'project-6-desc-1': 'Self-service system for pharmacies that streamlines customer service through digital kiosks with inventory management.',
        'project-6-desc-2': 'Stack: Java - MySQL.',
        'social-h1': 'Social networks',
        'more-info': '<i class="fa-brands fa-github"></i> More information',
        'github-btn': 'See more on Github <i class="fa-brands fa-github"></i>'
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
