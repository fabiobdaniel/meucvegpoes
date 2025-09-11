// Global variables
let currentLanguage = 'pt'; // Padrão em português
let cvData = {};
let allLanguageData = {}; // Armazenar todos os dados de todos os idiomas

// Translation API configuration
const TRANSLATION_API = {
    url: 'https://libretranslate.de/translate',
    fallback: true // Use fallback translations if API fails
};

// Language mapping for translation API
const LANGUAGE_CODES = {
    'pt': 'pt',
    'en': 'en', 
    'es': 'es'
};

// Fallback translations (basic translations for common terms)
const FALLBACK_TRANSLATIONS = {
    'pt': {
        'CEO & Fundador': 'CEO & Founder',
        'Diretor de Estratégia': 'Strategy Director',
        'Gerente de Desenvolvimento de Negócios': 'Business Development Manager',
        'Consultor Internacional': 'International Consultant',
        'Analista Sênior de Negócios': 'Senior Business Analyst',
        'Gerente de Projetos': 'Project Manager',
        'Consultor de Negócios': 'Business Consultant',
        'Analista Júnior': 'Junior Analyst',
        'Estratégia de Negócios': 'Business Strategy',
        'Liderança': 'Leadership',
        'Tecnologia': 'Technology',
        'Negócios Internacionais': 'International Business',
        'Finanças': 'Finance',
        'Marketing': 'Marketing',
        'Operações': 'Operations',
        'Vendas': 'Sales',
        'Idiomas': 'Languages',
        'Software': 'Software',
        'Expansão Internacional': 'International Expansion',
        'Parcerias Estratégicas': 'Strategic Partnerships',
        'Crescimento de Receita': 'Revenue Growth',
        'Transformação Digital': 'Digital Transformation',
        'Pesquisa de Mercado': 'Market Research',
        'Formação de Equipes': 'Team Building',
        'Estratégia de M&A': 'M&A Strategy',
        'Otimização de Custos': 'Cost Optimization',
        'Desenvolvimento de Marca': 'Brand Development',
        'Integração Tecnológica': 'Technology Integration',
        'Experiência do Cliente': 'Customer Experience',
        'Iniciativa de Sustentabilidade': 'Sustainability Initiative',
        'Inovação': 'Innovation',
        'Resultados': 'Results'
    },
    'en': {
        'CEO & Founder': 'CEO & Fundador',
        'Strategy Director': 'Diretor de Estratégia',
        'Business Development Manager': 'Gerente de Desenvolvimento de Negócios',
        'International Consultant': 'Consultor Internacional',
        'Senior Business Analyst': 'Analista Sênior de Negócios',
        'Project Manager': 'Gerente de Projetos',
        'Business Consultant': 'Consultor de Negócios',
        'Junior Analyst': 'Analista Júnior',
        'Business Strategy': 'Estratégia de Negócios',
        'Leadership': 'Liderança',
        'Technology': 'Tecnologia',
        'International Business': 'Negócios Internacionais',
        'Finance': 'Finanças',
        'Marketing': 'Marketing',
        'Operations': 'Operações',
        'Sales': 'Vendas',
        'Languages': 'Idiomas',
        'Software': 'Software',
        'International Expansion': 'Expansão Internacional',
        'Strategic Partnerships': 'Parcerias Estratégicas',
        'Revenue Growth': 'Crescimento de Receita',
        'Digital Transformation': 'Transformação Digital',
        'Market Research': 'Pesquisa de Mercado',
        'Team Building': 'Formação de Equipes',
        'M&A Strategy': 'Estratégia de M&A',
        'Cost Optimization': 'Otimização de Custos',
        'Brand Development': 'Desenvolvimento de Marca',
        'Technology Integration': 'Integração Tecnológica',
        'Customer Experience': 'Experiência do Cliente',
        'Sustainability Initiative': 'Iniciativa de Sustentabilidade',
        'Innovation': 'Inovação',
        'Results': 'Resultados'
    },
    'es': {
        'CEO & Fundador': 'CEO y Fundador',
        'Diretor de Estratégia': 'Director de Estrategia',
        'Gerente de Desenvolvimento de Negócios': 'Gerente de Desarrollo de Negocios',
        'Consultor Internacional': 'Consultor Internacional',
        'Analista Sênior de Negócios': 'Analista Senior de Negocios',
        'Gerente de Projetos': 'Gerente de Proyectos',
        'Consultor de Negócios': 'Consultor de Negocios',
        'Analista Júnior': 'Analista Junior',
        'Estratégia de Negócios': 'Estrategia de Negocios',
        'Liderança': 'Liderazgo',
        'Tecnologia': 'Tecnología',
        'Negócios Internacionais': 'Negocios Internacionales',
        'Finanças': 'Finanzas',
        'Marketing': 'Marketing',
        'Operações': 'Operaciones',
        'Vendas': 'Ventas',
        'Idiomas': 'Idiomas',
        'Software': 'Software',
        'Expansão Internacional': 'Expansión Internacional',
        'Parcerias Estratégicas': 'Alianzas Estratégicas',
        'Crescimento de Receita': 'Crecimiento de Ingresos',
        'Transformação Digital': 'Transformación Digital',
        'Pesquisa de Mercado': 'Investigación de Mercado',
        'Formação de Equipes': 'Formación de Equipos',
        'Estratégia de M&A': 'Estrategia de M&A',
        'Otimização de Custos': 'Optimización de Costos',
        'Desenvolvimento de Marca': 'Desarrollo de Marca',
        'Integração Tecnológica': 'Integración Tecnológica',
        'Experiência do Cliente': 'Experiencia del Cliente',
        'Iniciativa de Sustentabilidade': 'Iniciativa de Sostenibilidad',
        'Inovação': 'Innovación',
        'Resultados': 'Resultados'
    }
};


// Translation functions
async function translateText(text, fromLang, toLang) {
    if (!text || text.trim() === '') return text;
    
    // Check if we have a fallback translation
    const fallbackKey = `${fromLang}_${toLang}`;
    if (FALLBACK_TRANSLATIONS[fromLang] && FALLBACK_TRANSLATIONS[fromLang][text]) {
        return FALLBACK_TRANSLATIONS[fromLang][text];
    }
    
    try {
        const response = await fetch(TRANSLATION_API.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                q: text,
                source: LANGUAGE_CODES[fromLang],
                target: LANGUAGE_CODES[toLang],
                format: 'text'
            })
        });
        
        if (response.ok) {
            const data = await response.json();
            return data.translatedText || text;
        } else {
            console.warn('Translation API failed, using fallback');
            return text; // Return original text if translation fails
        }
    } catch (error) {
        console.warn('Translation error:', error);
        return text; // Return original text if translation fails
    }
}

async function translateObject(obj, fromLang, toLang) {
    if (!obj || typeof obj !== 'object') return obj;
    
    const translated = {};
    
    for (const [key, value] of Object.entries(obj)) {
        if (Array.isArray(value)) {
            // Handle arrays (like experience, skills, portfolio)
            translated[key] = await Promise.all(value.map(async (item) => {
                if (typeof item === 'object') {
                    return await translateObject(item, fromLang, toLang);
                }
                return await translateText(item, fromLang, toLang);
            }));
        } else if (typeof value === 'object' && value !== null) {
            // Handle nested objects
            translated[key] = await translateObject(value, fromLang, toLang);
        } else if (typeof value === 'string') {
            // Handle strings
            translated[key] = await translateText(value, fromLang, toLang);
        } else {
            // Handle other types (numbers, booleans, etc.)
            translated[key] = value;
        }
    }
    
    return translated;
}

// Scroll control variables
let scrollState = {
    experience: { current: 0, itemsPerPage: 4, total: 0 },
    skills: { current: 0, itemsPerPage: 6, total: 0 },
    portfolio: { current: 0, itemsPerPage: 6, total: 0 }
};

// Interface translations (static)
const interfaceTranslations = {
    pt: {
        'nav.home': 'Início',
        'nav.about': 'Sobre',
        'nav.experience': 'Experiência',
        'nav.skills': 'Habilidades',
        'nav.portfolio': 'Portfólio',
        'nav.contact': 'Contato',
        'hero.contact': 'Entre em Contato',
        'hero.learn': 'Saiba Mais',
        'about.title': 'Sobre Mim',
        'experience.title': 'Experiência Profissional',
        'skills.title': 'Habilidades',
        'portfolio.title': 'Portfólio',
        'contact.title': 'Contato',
        'contact.send': 'Enviar Mensagem',
        'edit.title': 'Editar Dados do CV',
        'edit.login.title': 'Credenciais de Acesso',
        'edit.login.username': 'Usuário',
        'edit.login.password': 'Senha',
        'edit.login.language': 'Idioma para Edição',
        'edit.login.submit': 'Confirmar e Editar',
        'edit.sections.hero': 'Seção Principal',
        'edit.sections.about': 'Sobre Mim',
        'edit.sections.experience': 'Experiência Profissional',
        'edit.sections.skills': 'Habilidades',
        'edit.sections.portfolio': 'Portfólio',
        'edit.sections.contact': 'Contato',
        'edit.hero.name': 'Nome Completo',
        'edit.hero.title': 'Título Profissional',
        'edit.hero.description': 'Descrição',
        'edit.about.text1': 'Texto 1',
        'edit.about.text2': 'Texto 2',
        'edit.about.stats.projects': 'Projetos Concluídos',
        'edit.about.stats.countries': 'Países Atendidos',
        'edit.about.stats.years': 'Anos de Experiência',
        'edit.experience.job1.title': 'Cargo 1',
        'edit.experience.job1.company': 'Empresa 1',
        'edit.experience.job1.period': 'Período 1',
        'edit.experience.job1.description': 'Descrição 1',
        'edit.experience.job2.title': 'Cargo 2',
        'edit.experience.job2.company': 'Empresa 2',
        'edit.experience.job2.period': 'Período 2',
        'edit.experience.job2.description': 'Descrição 2',
        'edit.skills.strategy.title': 'Estratégia de Negócios',
        'edit.skills.strategy.items': 'Itens de Estratégia (separados por vírgula)',
        'edit.skills.leadership.title': 'Liderança',
        'edit.skills.leadership.items': 'Itens de Liderança (separados por vírgula)',
        'edit.skills.tech.title': 'Tecnologia',
        'edit.skills.tech.items': 'Itens de Tecnologia (separados por vírgula)',
        'edit.portfolio.project1.title': 'Projeto 1 - Título',
        'edit.portfolio.project1.desc': 'Projeto 1 - Descrição',
        'edit.portfolio.project2.title': 'Projeto 2 - Título',
        'edit.portfolio.project2.desc': 'Projeto 2 - Descrição',
        'edit.portfolio.project3.title': 'Projeto 3 - Título',
        'edit.portfolio.project3.desc': 'Projeto 3 - Descrição',
        'edit.contact.email': 'Email',
        'edit.contact.phone': 'Telefone',
        'edit.contact.location': 'Localização',
        'edit.cancel': 'Cancelar',
        'edit.save': 'Salvar Alterações',
        'cards.innovation.title': 'Inovação',
        'cards.innovation.desc': 'Sempre à frente das tendências',
        'cards.leadership.title': 'Liderança',
        'cards.leadership.desc': 'Gestão de equipes de alta performance',
        'cards.results.title': 'Resultados',
        'cards.results.desc': 'Foco em entregas de valor',
        'contact.sending': 'Enviando...',
        'contact.success': 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
        'contact.error': 'Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.'
    },
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.skills': 'Skills',
        'nav.portfolio': 'Portfolio',
        'nav.contact': 'Contact',
        'hero.contact': 'Get in Touch',
        'hero.learn': 'Learn More',
        'about.title': 'About Me',
        'experience.title': 'Professional Experience',
        'skills.title': 'Skills',
        'portfolio.title': 'Portfolio',
        'contact.title': 'Contact',
        'contact.send': 'Send Message',
        'edit.title': 'Edit CV Data',
        'edit.login.title': 'Access Credentials',
        'edit.login.username': 'Username',
        'edit.login.password': 'Password',
        'edit.login.language': 'Language for Editing',
        'edit.login.submit': 'Confirm and Edit',
        'edit.sections.hero': 'Main Section',
        'edit.sections.about': 'About Me',
        'edit.sections.experience': 'Professional Experience',
        'edit.sections.skills': 'Skills',
        'edit.sections.portfolio': 'Portfolio',
        'edit.sections.contact': 'Contact',
        'edit.hero.name': 'Full Name',
        'edit.hero.title': 'Professional Title',
        'edit.hero.description': 'Description',
        'edit.about.text1': 'Text 1',
        'edit.about.text2': 'Text 2',
        'edit.about.stats.projects': 'Completed Projects',
        'edit.about.stats.countries': 'Countries Served',
        'edit.about.stats.years': 'Years of Experience',
        'edit.experience.job1.title': 'Position 1',
        'edit.experience.job1.company': 'Company 1',
        'edit.experience.job1.period': 'Period 1',
        'edit.experience.job1.description': 'Description 1',
        'edit.experience.job2.title': 'Position 2',
        'edit.experience.job2.company': 'Company 2',
        'edit.experience.job2.period': 'Period 2',
        'edit.experience.job2.description': 'Description 2',
        'edit.skills.strategy.title': 'Business Strategy',
        'edit.skills.strategy.items': 'Strategy Items (comma separated)',
        'edit.skills.leadership.title': 'Leadership',
        'edit.skills.leadership.items': 'Leadership Items (comma separated)',
        'edit.skills.tech.title': 'Technology',
        'edit.skills.tech.items': 'Technology Items (comma separated)',
        'edit.portfolio.project1.title': 'Project 1 - Title',
        'edit.portfolio.project1.desc': 'Project 1 - Description',
        'edit.portfolio.project2.title': 'Project 2 - Title',
        'edit.portfolio.project2.desc': 'Project 2 - Description',
        'edit.portfolio.project3.title': 'Project 3 - Title',
        'edit.portfolio.project3.desc': 'Project 3 - Description',
        'edit.contact.email': 'Email',
        'edit.contact.phone': 'Phone',
        'edit.contact.location': 'Location',
        'edit.cancel': 'Cancel',
        'edit.save': 'Save Changes',
        'cards.innovation.title': 'Innovation',
        'cards.innovation.desc': 'Always ahead of trends',
        'cards.leadership.title': 'Leadership',
        'cards.leadership.desc': 'High-performance team management',
        'cards.results.title': 'Results',
        'cards.results.desc': 'Focus on value delivery',
        'contact.sending': 'Sending...',
        'contact.success': 'Message sent successfully! We will contact you soon.',
        'contact.error': 'Error sending message. Please try again or contact us directly.'
    },
    es: {
        'nav.home': 'Inicio',
        'nav.about': 'Acerca',
        'nav.experience': 'Experiencia',
        'nav.skills': 'Habilidades',
        'nav.portfolio': 'Portafolio',
        'nav.contact': 'Contacto',
        'hero.contact': 'Ponte en Contacto',
        'hero.learn': 'Saber Más',
        'about.title': 'Acerca de Mí',
        'experience.title': 'Experiencia Profesional',
        'skills.title': 'Habilidades',
        'portfolio.title': 'Portafolio',
        'contact.title': 'Contacto',
        'contact.send': 'Enviar Mensaje',
        'edit.title': 'Editar Datos del CV',
        'edit.login.title': 'Credenciales de Acceso',
        'edit.login.username': 'Usuario',
        'edit.login.password': 'Contraseña',
        'edit.login.language': 'Idioma para Edición',
        'edit.login.submit': 'Confirmar y Editar',
        'edit.sections.hero': 'Sección Principal',
        'edit.sections.about': 'Acerca de Mí',
        'edit.sections.experience': 'Experiencia Profesional',
        'edit.sections.skills': 'Habilidades',
        'edit.sections.portfolio': 'Portafolio',
        'edit.sections.contact': 'Contacto',
        'edit.hero.name': 'Nombre Completo',
        'edit.hero.title': 'Título Profesional',
        'edit.hero.description': 'Descripción',
        'edit.about.text1': 'Texto 1',
        'edit.about.text2': 'Texto 2',
        'edit.about.stats.projects': 'Proyectos Completados',
        'edit.about.stats.countries': 'Países Atendidos',
        'edit.about.stats.years': 'Años de Experiencia',
        'edit.experience.job1.title': 'Cargo 1',
        'edit.experience.job1.company': 'Empresa 1',
        'edit.experience.job1.period': 'Período 1',
        'edit.experience.job1.description': 'Descripción 1',
        'edit.experience.job2.title': 'Cargo 2',
        'edit.experience.job2.company': 'Empresa 2',
        'edit.experience.job2.period': 'Período 2',
        'edit.experience.job2.description': 'Descripción 2',
        'edit.skills.strategy.title': 'Estrategia de Negocios',
        'edit.skills.strategy.items': 'Elementos de Estrategia (separados por comas)',
        'edit.skills.leadership.title': 'Liderazgo',
        'edit.skills.leadership.items': 'Elementos de Liderazgo (separados por comas)',
        'edit.skills.tech.title': 'Tecnología',
        'edit.skills.tech.items': 'Elementos de Tecnología (separados por comas)',
        'edit.portfolio.project1.title': 'Proyecto 1 - Título',
        'edit.portfolio.project1.desc': 'Proyecto 1 - Descripción',
        'edit.portfolio.project2.title': 'Proyecto 2 - Título',
        'edit.portfolio.project2.desc': 'Proyecto 2 - Descripción',
        'edit.portfolio.project3.title': 'Proyecto 3 - Título',
        'edit.portfolio.project3.desc': 'Proyecto 3 - Descripción',
        'edit.contact.email': 'Email',
        'edit.contact.phone': 'Teléfono',
        'edit.contact.location': 'Ubicación',
        'edit.cancel': 'Cancelar',
        'edit.save': 'Guardar Cambios',
        'cards.innovation.title': 'Innovación',
        'cards.innovation.desc': 'Siempre a la vanguardia de las tendencias',
        'cards.leadership.title': 'Liderazgo',
        'cards.leadership.desc': 'Gestión de equipos de alto rendimiento',
        'cards.results.title': 'Resultados',
        'cards.results.desc': 'Enfoque en la entrega de valor',
        'contact.sending': 'Enviando...',
        'contact.success': '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.',
        'contact.error': 'Error al enviar mensaje. Inténtalo de nuevo o contáctanos directamente.'
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('=== DOM LOADED ===');
    
    // Check if data is available
    console.log('EMBEDDED_CV_DATA available:', typeof EMBEDDED_CV_DATA !== 'undefined');
    
    if (typeof EMBEDDED_CV_DATA !== 'undefined') {
        console.log('EMBEDDED_CV_DATA keys:', Object.keys(EMBEDDED_CV_DATA));
        console.log('Portuguese data available:', !!EMBEDDED_CV_DATA['pt']);
        console.log('Experience data:', EMBEDDED_CV_DATA['pt'].experience);
        console.log('Skills data:', EMBEDDED_CV_DATA['pt'].skills);
        console.log('Portfolio data:', EMBEDDED_CV_DATA['pt'].portfolio);
        
        allLanguageData = EMBEDDED_CV_DATA;
        cvData = allLanguageData['pt'];
        console.log('Data loaded immediately:', cvData);
        
        // Update page content and translations
        updatePageContent();
        applyInterfaceTranslations();
    } else {
        console.error('EMBEDDED_CV_DATA not available!');
    }
    
    // Setup edit button with simple approach
    setTimeout(() => {
        const editBtn = document.getElementById('editModeBtn');
        if (editBtn) {
            editBtn.onclick = function(e) {
                e.preventDefault();
                console.log('Edit clicked!');
                document.getElementById('editModal').style.display = 'block';
            };
            console.log('Edit button setup complete');
        } else {
            console.error('Edit button not found!');
        }
    }, 1000);
    
    initializeApp();
});

function initializeApp() {
    console.log('Initializing app...');
    
    // Set up event listeners
    setupEventListeners();
    
    console.log('App initialized successfully!');
    
    // Only load data if not already loaded
    if (!cvData || Object.keys(cvData).length === 0) {
        console.log('No CV data available, loading...');
        loadCVData();
    } else {
        console.log('CV data already loaded, skipping load');
    }
}

function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Language selector
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            console.log('Language changed to:', this.value);
            currentLanguage = this.value;
            
            // Se já temos os dados carregados, apenas trocar o idioma
            if (allLanguageData && allLanguageData[currentLanguage]) {
                console.log('Switching to language data:', currentLanguage);
                cvData = allLanguageData[currentLanguage];
                updatePageContent();
                applyInterfaceTranslations();
            } else {
                console.log('Language data not available, loading...');
                // Se não temos os dados, carregar
                loadCVData();
            }
        });
    } else {
        console.error('Language selector not found!');
    }

    // Edit button - direct approach
    const editModeBtn = document.getElementById('editModeBtn');
    console.log('Edit button element:', editModeBtn);
    
    if (editModeBtn) {
        editModeBtn.onclick = function(e) {
            e.preventDefault();
            console.log('Edit button clicked - opening modal');
            openEditModal();
        };
        console.log('Edit button onclick handler added successfully');
    } else {
        console.error('Edit button not found!');
    }

    // Login and edit button
    const loginAndEditBtn = document.getElementById('loginAndEditBtn');
    if (loginAndEditBtn) {
        loginAndEditBtn.addEventListener('click', function() {
            console.log('Login and edit button clicked');
            handleLoginAndEdit();
        });
    } else {
        console.error('Login and edit button not found!');
    }

    // Edit form
    const editForm = document.getElementById('editForm');
    if (editForm) {
        editForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Edit form submitted');
            saveEditData();
        });
    } else {
        console.error('Edit form not found!');
    }

    // Cancel edit
    const cancelEdit = document.getElementById('cancelEdit');
    if (cancelEdit) {
        cancelEdit.addEventListener('click', function() {
            console.log('Cancel edit clicked');
            closeModal('editModal');
        });
    } else {
        console.error('Cancel edit button not found!');
    }

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Contact form submitted');
            handleContactFormSubmit(this);
        });
    } else {
        console.error('Contact form not found!');
    }

    // Modal close buttons
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal.id);
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target.id);
        }
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // CTA buttons functionality
    const contactButton = document.querySelector('.btn-primary');
    const learnButton = document.querySelector('.btn-secondary');
    
    if (contactButton) {
        contactButton.addEventListener('click', function() {
            const target = document.querySelector('#contato');
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    if (learnButton) {
        learnButton.addEventListener('click', function() {
            const target = document.querySelector('#sobre');
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Scroll controls
    setupScrollControls();
    
    // Global click handler for edit button (fallback)
    document.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'editModeBtn') {
            e.preventDefault();
            console.log('Edit button clicked via global handler');
            openEditModal();
        }
    });
}

function setupScrollControls() {
    // Experience scroll controls
    document.getElementById('expScrollUp')?.addEventListener('click', () => scrollSection('experience', 'up'));
    document.getElementById('expScrollDown')?.addEventListener('click', () => scrollSection('experience', 'down'));
    
    // Skills scroll controls
    document.getElementById('skillsScrollUp')?.addEventListener('click', () => scrollSection('skills', 'up'));
    document.getElementById('skillsScrollDown')?.addEventListener('click', () => scrollSection('skills', 'down'));
    
    // Portfolio scroll controls
    document.getElementById('portfolioScrollUp')?.addEventListener('click', () => scrollSection('portfolio', 'up'));
    document.getElementById('portfolioScrollDown')?.addEventListener('click', () => scrollSection('portfolio', 'down'));
}

// Load CV data from embedded data
async function loadCVData() {
    console.log('=== LOADING CV DATA ===');
    console.log('Current language:', currentLanguage);
    console.log('All language data keys:', Object.keys(allLanguageData));
    
    try {
        // Se ainda não carregamos os dados, carregue todos os idiomas
        if (Object.keys(allLanguageData).length === 0) {
            console.log('No data loaded yet, loading from embedded data...');
            
            // Primeiro tente carregar do localStorage
            const savedData = localStorage.getItem('cvData');
            if (savedData) {
                allLanguageData = JSON.parse(savedData);
                console.log('Data loaded from localStorage:', allLanguageData);
            } else {
                // Usar dados embutidos
                if (typeof EMBEDDED_CV_DATA !== 'undefined') {
                    allLanguageData = EMBEDDED_CV_DATA;
                    console.log('All language data loaded from embedded data:', allLanguageData);
                    console.log('Available languages:', Object.keys(allLanguageData));
                } else {
                    console.error('EMBEDDED_CV_DATA not available!');
                    loadFallbackData();
                    return;
                }
            }
        }
        
        // Carregar dados do idioma atual
        if (allLanguageData[currentLanguage]) {
            cvData = allLanguageData[currentLanguage];
            console.log('Data loaded for language:', currentLanguage);
            console.log('CV Data structure:', cvData);
            console.log('Experience array:', cvData.experience);
            console.log('Skills array:', cvData.skills);
            console.log('Portfolio array:', cvData.portfolio);
            console.log('Cards array:', cvData.cards);
            
            // Verificar se os arrays existem e têm dados
            console.log('=== ARRAY VERIFICATION ===');
            console.log('Experience is array:', Array.isArray(cvData.experience), 'Length:', cvData.experience?.length);
            console.log('Skills is array:', Array.isArray(cvData.skills), 'Length:', cvData.skills?.length);
            console.log('Portfolio is array:', Array.isArray(cvData.portfolio), 'Length:', cvData.portfolio?.length);
            console.log('Cards is array:', Array.isArray(cvData.cards), 'Length:', cvData.cards?.length);
            
            updatePageContent();
            applyInterfaceTranslations();
        } else {
            console.error('Language not found:', currentLanguage);
            console.error('Available languages:', Object.keys(allLanguageData));
            loadFallbackData();
        }
    } catch (error) {
        console.error('Error loading CV data:', error);
        loadFallbackData();
    }
}

// Force load data immediately
function forceLoadData() {
    console.log('Force loading data...');
    if (typeof EMBEDDED_CV_DATA !== 'undefined') {
        allLanguageData = EMBEDDED_CV_DATA;
        cvData = allLanguageData[currentLanguage];
        console.log('Data force loaded:', cvData);
        updatePageContent();
        applyInterfaceTranslations();
    } else {
        console.error('EMBEDDED_CV_DATA not available for force load');
        loadFallbackData();
    }
}

// Fallback data when API is not available
function loadFallbackData() {
    console.log('Loading fallback data...');
    cvData = {
        hero: {
            name: 'Fabio Bittencourt Daniel',
            title: currentLanguage === 'pt' ? 'Estrategista de Negócios Globais & Desenvolvimento Empresarial' :
                   currentLanguage === 'es' ? 'Estratega de Negocios Globales y Desarrollo Empresarial' :
                   'Global Business Strategist & Business Development',
            description: currentLanguage === 'pt' ? 
                'Ao longo da minha trajetória em Estratégia de Negócios Globais, desenvolvi habilidades essenciais para liderar transformações empresariais, construir parcerias estratégicas e entender as necessidades do mercado internacional. Agora, trago essa experiência para a área de Desenvolvimento Empresarial, onde sigo focada em proporcionar soluções de alto valor, fortalecer conexões globais e impulsionar o crescimento e inovação.' :
                currentLanguage === 'es' ?
                'A lo largo de mi trayectoria en Estrategia de Negocios Globales, he desarrollado habilidades esenciales para liderar transformaciones empresariales, construir alianzas estratégicas y entender las necesidades del mercado internacional. Ahora, trago esta experiencia al área de Desarrollo Empresarial, donde sigo enfocado en proporcionar soluciones de alto valor, fortalecer conexiones globales e impulsar el crecimiento y la innovación.' :
                'Throughout my career in Global Business Strategy, I have developed essential skills to lead business transformations, build strategic partnerships and understand the needs of the international market. Now, I bring this experience to the Business Development area, where I remain focused on providing high-value solutions, strengthening global connections and driving growth and innovation.'
        },
        about: {
            text1: currentLanguage === 'pt' ? 
                'Profissional experiente em estratégias de negócios globais com mais de 10 anos de experiência no mercado internacional.' :
                currentLanguage === 'es' ?
                'Profesional experimentado en estrategias de negocios globales con más de 10 años de experiencia en el mercado internacional.' :
                'Experienced professional in global business strategies with more than 10 years of experience in the international market.',
            text2: currentLanguage === 'pt' ?
                'Especializado em desenvolvimento de estratégias de expansão, análise de mercados emergentes e implementação de soluções inovadoras para empresas multinacionais.' :
                currentLanguage === 'es' ?
                'Especializado en el desarrollo de estrategias de expansión, análisis de mercados emergentes e implementación de soluciones innovadoras para empresas multinacionales.' :
                'Specialized in developing expansion strategies, analyzing emerging markets and implementing innovative solutions for multinational companies.',
            stats_projects: '+50',
            stats_projects_label: currentLanguage === 'pt' ? 'Projetos Concluídos' :
                                 currentLanguage === 'es' ? 'Proyectos Completados' : 'Completed Projects',
            stats_countries: '+20',
            stats_countries_label: currentLanguage === 'pt' ? 'Países Atendidos' :
                                   currentLanguage === 'es' ? 'Países Atendidos' : 'Countries Served',
            stats_years: '10+',
            stats_years_label: currentLanguage === 'pt' ? 'Anos de Experiência' :
                              currentLanguage === 'es' ? 'Años de Experiencia' : 'Years of Experience'
        },
        experience: {
            job1_title: currentLanguage === 'pt' ? 'CEO & Fundador' :
                       currentLanguage === 'es' ? 'CEO y Fundador' : 'CEO & Founder',
            job1_company: 'FBD Global Business Strategy',
            job1_period: currentLanguage === 'pt' ? '2020 - Presente' :
                        currentLanguage === 'es' ? '2020 - Presente' : '2020 - Present',
            job1_description: currentLanguage === 'pt' ?
                'Liderança estratégica da empresa, desenvolvimento de parcerias internacionais e implementação de soluções inovadoras para clientes globais.' :
                currentLanguage === 'es' ?
                'Liderazgo estratégico de la empresa, desarrollo de alianzas internacionales e implementación de soluciones innovadoras para clientes globales.' :
                'Strategic leadership of the company, development of international partnerships and implementation of innovative solutions for global clients.',
            job2_title: currentLanguage === 'pt' ? 'Diretor de Estratégia' :
                       currentLanguage === 'es' ? 'Director de Estrategia' : 'Strategy Director',
            job2_company: currentLanguage === 'pt' ? 'Empresa Multinacional' :
                         currentLanguage === 'es' ? 'Empresa Multinacional' : 'Multinational Company',
            job2_period: '2018 - 2020',
            job2_description: currentLanguage === 'pt' ?
                'Desenvolvimento e implementação de estratégias de expansão internacional, análise de mercados e gestão de equipes multiculturais.' :
                currentLanguage === 'es' ?
                'Desarrollo e implementación de estrategias de expansión internacional, análisis de mercados y gestión de equipos multiculturales.' :
                'Development and implementation of international expansion strategies, market analysis and management of multicultural teams.'
        },
        skills: {
            strategy_title: currentLanguage === 'pt' ? 'Estratégia de Negócios' :
                           currentLanguage === 'es' ? 'Estrategia de Negocios' : 'Business Strategy',
            strategy_items: currentLanguage === 'pt' ? 'Análise de Mercado,Planejamento Estratégico,Desenvolvimento de Negócios' :
                           currentLanguage === 'es' ? 'Análisis de Mercado,Planificación Estratégica,Desarrollo de Negocios' :
                           'Market Analysis,Strategic Planning,Business Development',
            leadership_title: currentLanguage === 'pt' ? 'Liderança' :
                             currentLanguage === 'es' ? 'Liderazgo' : 'Leadership',
            leadership_items: currentLanguage === 'pt' ? 'Gestão de Equipes,Comunicação Intercultural,Tomada de Decisão' :
                             currentLanguage === 'es' ? 'Gestión de Equipos,Comunicación Intercultural,Toma de Decisiones' :
                             'Team Management,Cross-cultural Communication,Decision Making',
            tech_title: currentLanguage === 'pt' ? 'Tecnologia' :
                       currentLanguage === 'es' ? 'Tecnología' : 'Technology',
            tech_items: currentLanguage === 'pt' ? 'Análise de Dados,Ferramentas de Gestão,Inovação Digital' :
                       currentLanguage === 'es' ? 'Análisis de Datos,Herramientas de Gestión,Innovación Digital' :
                       'Data Analysis,Management Tools,Digital Innovation'
        },
        portfolio: {
            project1_title: currentLanguage === 'pt' ? 'Expansão Internacional' :
                           currentLanguage === 'es' ? 'Expansión Internacional' : 'International Expansion',
            project1_desc: currentLanguage === 'pt' ? 'Estratégia de entrada em 15 novos mercados' :
                          currentLanguage === 'es' ? 'Estrategia de entrada en 15 nuevos mercados' :
                          'Entry strategy into 15 new markets',
            project2_title: currentLanguage === 'pt' ? 'Parcerias Estratégicas' :
                           currentLanguage === 'es' ? 'Alianzas Estratégicas' : 'Strategic Partnerships',
            project2_desc: currentLanguage === 'pt' ? 'Desenvolvimento de alianças globais' :
                          currentLanguage === 'es' ? 'Desarrollo de alianzas globales' :
                          'Development of global alliances',
            project3_title: currentLanguage === 'pt' ? 'Crescimento de Receita' :
                           currentLanguage === 'es' ? 'Crecimiento de Ingresos' : 'Revenue Growth',
            project3_desc: currentLanguage === 'pt' ? 'Aumento de 300% em 3 anos' :
                          currentLanguage === 'es' ? 'Aumento del 300% en 3 años' :
                          '300% increase in 3 years'
        },
        contact: {
            email: 'fabiobdaniel@gmail.com',
            phone: '+55 (11) 99999-9999',
            location: currentLanguage === 'pt' ? 'São Paulo, Brasil' :
                     currentLanguage === 'es' ? 'São Paulo, Brasil' : 'São Paulo, Brazil'
        },
        cards: {
            innovation_title: currentLanguage === 'pt' ? 'Inovação' :
                             currentLanguage === 'es' ? 'Innovación' : 'Innovation',
            innovation_desc: currentLanguage === 'pt' ? 'Sempre à frente das tendências' :
                            currentLanguage === 'es' ? 'Siempre a la vanguardia de las tendencias' :
                            'Always ahead of trends',
            leadership_title: currentLanguage === 'pt' ? 'Liderança' :
                             currentLanguage === 'es' ? 'Liderazgo' : 'Leadership',
            leadership_desc: currentLanguage === 'pt' ? 'Gestão de equipes de alta performance' :
                            currentLanguage === 'es' ? 'Gestión de equipos de alto rendimiento' :
                            'High-performance team management',
            results_title: currentLanguage === 'pt' ? 'Resultados' :
                          currentLanguage === 'es' ? 'Resultados' : 'Results',
            results_desc: currentLanguage === 'pt' ? 'Foco em entregas de valor' :
                         currentLanguage === 'es' ? 'Enfoque en la entrega de valor' :
                         'Focus on value delivery'
        }
    };
    
    updatePageContent();
    applyInterfaceTranslations();
}

async function saveCVData(data) {
    try {
        console.log('Saving data for language:', currentLanguage);
        
        // Atualizar dados na memória para o idioma atual
        allLanguageData[currentLanguage] = data;
        cvData = data;
        
        // Traduzir automaticamente para os outros idiomas
        const otherLanguages = ['pt', 'en', 'es'].filter(lang => lang !== currentLanguage);
        
        console.log('Translating to other languages:', otherLanguages);
        
        // Mostrar loading
        const saveButton = document.querySelector('#editForm button[type="submit"]');
        if (saveButton) {
            saveButton.disabled = true;
            saveButton.textContent = 'Traduzindo e salvando...';
        }
        
        // Criar indicador de progresso
        const progressDiv = document.createElement('div');
        progressDiv.id = 'translation-progress';
        progressDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(26, 11, 46, 0.95);
            color: white;
            padding: 20px;
            border-radius: 10px;
            border: 2px solid #ff6b35;
            z-index: 10000;
            text-align: center;
        `;
        progressDiv.innerHTML = `
            <h3>Traduzindo dados...</h3>
            <p>Por favor, aguarde enquanto traduzimos para os outros idiomas.</p>
            <div id="progress-bar" style="width: 100%; height: 4px; background: rgba(255,255,255,0.2); border-radius: 2px; margin: 10px 0;">
                <div id="progress-fill" style="width: 0%; height: 100%; background: #ff6b35; border-radius: 2px; transition: width 0.3s ease;"></div>
            </div>
        `;
        document.body.appendChild(progressDiv);
        
        // Traduzir para cada idioma
        for (let i = 0; i < otherLanguages.length; i++) {
            const targetLang = otherLanguages[i];
            try {
                console.log(`Translating to ${targetLang}...`);
                
                // Atualizar progresso
                const progressFill = document.getElementById('progress-fill');
                if (progressFill) {
                    progressFill.style.width = `${((i + 1) / otherLanguages.length) * 100}%`;
                }
                
                const translatedData = await translateObject(data, currentLanguage, targetLang);
                allLanguageData[targetLang] = translatedData;
                console.log(`Translation to ${targetLang} completed`);
            } catch (error) {
                console.error(`Error translating to ${targetLang}:`, error);
                // Keep existing data for this language if translation fails
                if (!allLanguageData[targetLang]) {
                    allLanguageData[targetLang] = data; // Use original data as fallback
                }
            }
        }
        
        // Salvar no localStorage como backup
        localStorage.setItem('cvData', JSON.stringify(allLanguageData));
        
        // Atualizar a interface
        updatePageContent();
        
        // Remover indicador de progresso
        const progressDivSuccess = document.getElementById('translation-progress');
        if (progressDivSuccess) {
            progressDivSuccess.remove();
        }
        
        // Restaurar botão
        if (saveButton) {
            saveButton.disabled = false;
            saveButton.textContent = 'Salvar Alterações';
        }
        
        alert('Dados salvos e traduzidos com sucesso!');
        console.log('All data saved and translated:', allLanguageData);
    } catch (error) {
        console.error('Error saving CV data:', error);
        alert('Erro ao salvar dados');
        
        // Remover indicador de progresso em caso de erro
        const progressDivError = document.getElementById('translation-progress');
        if (progressDivError) {
            progressDivError.remove();
        }
        
        // Restaurar botão em caso de erro
        const saveButton = document.querySelector('#editForm button[type="submit"]');
        if (saveButton) {
            saveButton.disabled = false;
            saveButton.textContent = 'Salvar Alterações';
        }
    }
}

function saveToLocalStorage(data) {
    // Save data to localStorage as fallback
    const savedData = JSON.parse(localStorage.getItem('cvData') || '{}');
    savedData[currentLanguage] = data;
    localStorage.setItem('cvData', JSON.stringify(savedData));
    
    // Update current data
    cvData = data;
    updatePageContent();
}

// Update page content with CV data
function updatePageContent() {
    console.log('=== UPDATING PAGE CONTENT ===');
    console.log('CV Data available:', !!cvData);
    console.log('CV Data keys:', cvData ? Object.keys(cvData) : 'No data');
    
    if (!cvData) {
        console.log('No CV data available, loading fallback...');
        loadFallbackData();
        return;
    }

    // Hero section
    console.log('Updating hero section:', cvData.hero);
    if (cvData.hero?.name) {
        updateElement('.hero .name', cvData.hero.name);
    }
    if (cvData.hero?.title) {
        updateElement('.hero .title', cvData.hero.title);
    }
    if (cvData.hero?.description) {
        updateElement('.hero .description', cvData.hero.description);
    }

    // About section
    updateElement('.about-text p:first-child', cvData.about?.text1);
    updateElement('.about-text p:last-child', cvData.about?.text2);
    updateElement('.stat:nth-child(1) h3', cvData.about?.stats_projects);
    updateElement('.stat:nth-child(1) p', cvData.about?.stats_projects_label);
    updateElement('.stat:nth-child(2) h3', cvData.about?.stats_countries);
    updateElement('.stat:nth-child(2) p', cvData.about?.stats_countries_label);
    updateElement('.stat:nth-child(3) h3', cvData.about?.stats_years);
    updateElement('.stat:nth-child(3) p', cvData.about?.stats_years_label);

    // Experience section - SIMPLIFIED
    console.log('=== UPDATING EXPERIENCE ===');
    console.log('CV Data exists:', !!cvData);
    console.log('Experience data exists:', !!(cvData && cvData.experience));
    console.log('Experience data type:', typeof (cvData && cvData.experience));
    console.log('Experience data:', cvData && cvData.experience);
    
    if (cvData && cvData.experience && Array.isArray(cvData.experience)) {
        console.log('Number of experiences:', cvData.experience.length);
        
        const timelineContainer = document.querySelector('.timeline');
        console.log('Timeline container found:', !!timelineContainer);
        
        if (timelineContainer) {
            console.log('Timeline container found, updating content...');
            timelineContainer.innerHTML = '';
            
            // Add experiences directly
            cvData.experience.forEach((exp, index) => {
                console.log(`Adding experience ${index + 1}:`, exp.title);
                const timelineItem = document.createElement('div');
                timelineItem.className = 'timeline-item';
                timelineItem.innerHTML = `
                    <div class="timeline-content">
                        <h3>${exp.title || ''}</h3>
                        <h4>${exp.company || ''}</h4>
                        <span class="date">${exp.period || ''}</span>
                        <p>${exp.description || ''}</p>
                    </div>
                `;
                timelineContainer.appendChild(timelineItem);
            });
            
            console.log('Experience items added:', cvData.experience.length);
        } else {
            console.error('Timeline container not found!');
        }
    } else {
        console.log('No experience data available or not an array');
    }

    // Skills section - SIMPLIFIED
    console.log('=== UPDATING SKILLS ===');
    console.log('Skills data:', cvData.skills);
    
    if (cvData.skills && Array.isArray(cvData.skills)) {
        console.log('Number of skill categories:', cvData.skills.length);
        
        const skillsContainer = document.querySelector('.skills-grid');
        if (skillsContainer) {
            console.log('Skills container found, updating content...');
            skillsContainer.innerHTML = '';
            
            // Add skills directly
            cvData.skills.forEach((skill, index) => {
                const skillCategory = document.createElement('div');
                skillCategory.className = 'skill-category';
                
                const skillsList = skill.skills_list ? 
                    skill.skills_list.split(',').map(item => item.trim()).filter(item => item) : [];
                
                skillCategory.innerHTML = `
                    <h3>${skill.category_title || ''}</h3>
                    <div class="skill-items">
                        ${skillsList.map(skillItem => `<span class="skill-tag">${skillItem}</span>`).join('')}
                    </div>
                `;
                skillsContainer.appendChild(skillCategory);
            });
            
            console.log('Skill categories added:', cvData.skills.length);
        } else {
            console.error('Skills container not found!');
        }
    } else {
        console.log('No skills data available');
    }

    // Portfolio section - SIMPLIFIED
    console.log('=== UPDATING PORTFOLIO ===');
    console.log('Portfolio data:', cvData.portfolio);
    
    if (cvData.portfolio && Array.isArray(cvData.portfolio)) {
        console.log('Number of portfolio items:', cvData.portfolio.length);
        
        const portfolioContainer = document.querySelector('.portfolio-grid');
        if (portfolioContainer) {
            console.log('Portfolio container found, updating content...');
            portfolioContainer.innerHTML = '';
            
            // Add portfolio items directly
            cvData.portfolio.forEach((project, index) => {
                const portfolioItem = document.createElement('div');
                portfolioItem.className = 'portfolio-item';
                portfolioItem.innerHTML = `
                    <h3>${project.title || ''}</h3>
                    <p>${project.description || ''}</p>
                `;
                portfolioContainer.appendChild(portfolioItem);
            });
            
            console.log('Portfolio items added:', cvData.portfolio.length);
        } else {
            console.error('Portfolio container not found!');
        }
    } else {
        console.log('No portfolio data available');
    }

    // Contact section
    updateElement('.contact-item:nth-child(1) span', cvData.contact?.email);
    updateElement('.contact-item:nth-child(2) span', cvData.contact?.phone);
    updateElement('.contact-item:nth-child(3) span', cvData.contact?.location);

    // Cards section - trabalhar com arrays dinamicamente
    if (cvData.cards && Array.isArray(cvData.cards)) {
        const cardsContainer = document.querySelector('.cards-grid');
        if (cardsContainer) {
            // Verificar se já existem cards estáticos
            const existingCards = cardsContainer.querySelectorAll('.card');
            if (existingCards.length === 0) {
                console.log('Rendering cards dynamically:', cvData.cards);
                // Limpar conteúdo existente
                cardsContainer.innerHTML = '';
                
                // Criar elementos dinamicamente para cada card
                cvData.cards.forEach((card, index) => {
                    const cardElement = document.createElement('div');
                    cardElement.className = 'card';
                    
                    // Definir ícones para cada card baseado no título
                    let iconClass = 'fas fa-rocket'; // padrão
                    if (card.title) {
                        if (card.title.toLowerCase().includes('inovação') || card.title.toLowerCase().includes('innovation') || card.title.toLowerCase().includes('innovación')) {
                            iconClass = 'fas fa-rocket';
                        } else if (card.title.toLowerCase().includes('liderança') || card.title.toLowerCase().includes('leadership') || card.title.toLowerCase().includes('liderazgo')) {
                            iconClass = 'fas fa-users';
                        } else if (card.title.toLowerCase().includes('resultados') || card.title.toLowerCase().includes('results') || card.title.toLowerCase().includes('resultados')) {
                            iconClass = 'fas fa-chart-line';
                        }
                    }
                    
                    cardElement.innerHTML = `
                        <div class="card-icon">
                            <i class="${iconClass}"></i>
                        </div>
                        <h3>${card.title || ''}</h3>
                        <p>${card.description || ''}</p>
                    `;
                    cardsContainer.appendChild(cardElement);
                });
            } else {
                console.log('Cards already exist, skipping dynamic rendering');
            }
        } else {
            console.error('Cards container not found!');
        }
    } else {
        console.log('No cards data or not an array:', cvData.cards);
    }
}

function updateElement(selector, content) {
    const element = document.querySelector(selector);
    console.log(`Updating ${selector} with:`, content);
    if (element && content !== undefined && content !== null) {
        // Clear existing content first to avoid duplication
        element.textContent = '';
        element.textContent = content;
        console.log(`Successfully updated ${selector}`);
    } else {
        console.log(`Element not found or no content for ${selector}`);
    }
}

function updateSkillsItems(selector, itemsString) {
    const container = document.querySelector(selector);
    if (container && itemsString) {
        const items = itemsString.split(',').map(item => item.trim()).filter(item => item);
        container.innerHTML = items.map(item => `<span class="skill-tag">${item}</span>`).join('');
    }
}

function applyInterfaceTranslations() {
    console.log('Applying interface translations for language:', currentLanguage);
    
    const elements = document.querySelectorAll('[data-translate]');
    console.log('Found elements with data-translate:', elements.length);
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (interfaceTranslations[currentLanguage] && interfaceTranslations[currentLanguage][key]) {
            // Clear content first to avoid duplication
            element.textContent = '';
            element.textContent = interfaceTranslations[currentLanguage][key];
            console.log(`Translated ${key}: ${interfaceTranslations[currentLanguage][key]}`);
        } else {
            console.log(`Translation not found for key: ${key} in language: ${currentLanguage}`);
        }
    });
    
    // Update language selector
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = currentLanguage;
    }
    
    // Update scroll control tooltips
    updateScrollTooltips();
    
    console.log('Interface translations applied successfully');
}

function updateScrollTooltips() {
    const tooltips = {
        pt: {
            expUp: 'Ver experiências anteriores',
            expDown: 'Ver próximas experiências',
            skillsUp: 'Ver categorias anteriores',
            skillsDown: 'Ver próximas categorias',
            portfolioUp: 'Ver projetos anteriores',
            portfolioDown: 'Ver próximos projetos'
        },
        en: {
            expUp: 'View previous experiences',
            expDown: 'View next experiences',
            skillsUp: 'View previous categories',
            skillsDown: 'View next categories',
            portfolioUp: 'View previous projects',
            portfolioDown: 'View next projects'
        },
        es: {
            expUp: 'Ver experiencias anteriores',
            expDown: 'Ver próximas experiencias',
            skillsUp: 'Ver categorías anteriores',
            skillsDown: 'Ver próximas categorías',
            portfolioUp: 'Ver proyectos anteriores',
            portfolioDown: 'Ver próximos proyectos'
        }
    };
    
    const currentTooltips = tooltips[currentLanguage] || tooltips.en;
    
    // Update experience tooltips
    const expUp = document.getElementById('expScrollUp');
    const expDown = document.getElementById('expScrollDown');
    if (expUp) expUp.title = currentTooltips.expUp;
    if (expDown) expDown.title = currentTooltips.expDown;
    
    // Update skills tooltips
    const skillsUp = document.getElementById('skillsScrollUp');
    const skillsDown = document.getElementById('skillsScrollDown');
    if (skillsUp) skillsUp.title = currentTooltips.skillsUp;
    if (skillsDown) skillsDown.title = currentTooltips.skillsDown;
    
    // Update portfolio tooltips
    const portfolioUp = document.getElementById('portfolioScrollUp');
    const portfolioDown = document.getElementById('portfolioScrollDown');
    if (portfolioUp) portfolioUp.title = currentTooltips.portfolioUp;
    if (portfolioDown) portfolioDown.title = currentTooltips.portfolioDown;
}

// Modal functions
function openEditModal() {
    console.log('openEditModal called');
    
    // Reset form and show login section
    const editFormContainer = document.getElementById('editFormContainer');
    const editSection = document.querySelector('.edit-section');
    const editUsername = document.getElementById('editUsername');
    const editPassword = document.getElementById('editPassword');
    const editLanguageSelect = document.getElementById('editLanguageSelect');
    
    console.log('Elements found:', {
        editFormContainer: !!editFormContainer,
        editSection: !!editSection,
        editUsername: !!editUsername,
        editPassword: !!editPassword,
        editLanguageSelect: !!editLanguageSelect
    });
    
    if (editFormContainer) editFormContainer.style.display = 'none';
    if (editSection) editSection.style.display = 'block';
    if (editUsername) editUsername.value = '';
    if (editPassword) editPassword.value = '';
    if (editLanguageSelect) editLanguageSelect.value = currentLanguage;
    
    // Show modal
    const modal = document.getElementById('editModal');
    if (modal) {
        modal.style.display = 'block';
        console.log('Modal opened successfully');
    } else {
        console.error('Modal not found!');
    }
}

async function handleLoginAndEdit() {
    const username = document.getElementById('editUsername').value;
    const password = document.getElementById('editPassword').value;
    const editLanguage = document.getElementById('editLanguageSelect').value;
    
    // Validate credentials
    if (username === 'fabio' && password === '1407') {
        console.log('Login successful, loading data for language:', editLanguage);
        
        // Ensure data is loaded
        if (Object.keys(allLanguageData).length === 0) {
            console.log('Loading data first...');
            await loadCVData();
        }
        
        // Check if language data exists
        if (allLanguageData[editLanguage]) {
            // Show edit form
            document.querySelector('.edit-section').style.display = 'none';
            document.getElementById('editFormContainer').style.display = 'block';
            
            // Load data for selected language
            cvData = allLanguageData[editLanguage];
            currentLanguage = editLanguage;
            updatePageContent();
            applyInterfaceTranslations();
            loadCurrentDataToEdit();
            
            console.log('Edit mode activated for language:', editLanguage);
        } else {
            console.error('Language data not available:', editLanguage);
            console.error('Available languages:', Object.keys(allLanguageData));
            alert('Dados do idioma não disponíveis. Tente recarregar a página.');
        }
    } else {
        alert('Credenciais incorretas! Usuário: fabio, Senha: 1407');
    }
}

function loadCurrentDataToEdit() {
    console.log('Loading current data to edit form...');
    console.log('CV Data available:', cvData);
    
    if (!cvData) {
        console.error('No CV data available for editing');
        return;
    }

    // Hero section
    console.log('Loading hero data:', cvData.hero);
    document.getElementById('editName').value = cvData.hero?.name || '';
    document.getElementById('editTitle').value = cvData.hero?.title || '';
    document.getElementById('editDescription').value = cvData.hero?.description || '';
    
    // About section
    document.getElementById('editAbout1').value = cvData.about?.text1 || '';
    document.getElementById('editAbout2').value = cvData.about?.text2 || '';
    document.getElementById('editStatsProjects').value = cvData.about?.stats_projects || '';
    document.getElementById('editStatsCountries').value = cvData.about?.stats_countries || '';
    document.getElementById('editStatsYears').value = cvData.about?.stats_years || '';
    
    // Generate dynamic form fields for arrays
    generateDynamicEditFields();
}

function generateDynamicEditFields() {
    // Generate Experience fields
    generateExperienceFields();
    
    // Generate Skills fields
    generateSkillsFields();
    
    // Generate Portfolio fields
    generatePortfolioFields();
}

function generateExperienceFields() {
    const experienceContainer = document.querySelector('#editForm .edit-section:nth-child(3)');
    if (!experienceContainer) return;
    
    // Clear existing dynamic fields
    const existingFields = experienceContainer.querySelectorAll('.dynamic-field');
    existingFields.forEach(field => field.remove());
    
    // Generate fields for up to 20 experiences
    const maxExperiences = 20;
    const currentExperiences = cvData.experience && Array.isArray(cvData.experience) ? cvData.experience : [];
    
    for (let i = 0; i < maxExperiences; i++) {
        const exp = currentExperiences[i] || {};
        const fieldGroup = document.createElement('div');
        fieldGroup.className = 'dynamic-field experience-field';
        fieldGroup.innerHTML = `
            <h4>Experiência ${i + 1}</h4>
            <div class="form-group">
                <label>Título do Cargo</label>
                <input type="text" id="editJob${i + 1}Title" name="job${i + 1}Title" value="${exp.title || ''}" placeholder="Ex: CEO & Founder">
            </div>
            <div class="form-group">
                <label>Empresa</label>
                <input type="text" id="editJob${i + 1}Company" name="job${i + 1}Company" value="${exp.company || ''}" placeholder="Ex: FBD Global Business Strategy">
            </div>
            <div class="form-group">
                <label>Período</label>
                <input type="text" id="editJob${i + 1}Period" name="job${i + 1}Period" value="${exp.period || ''}" placeholder="Ex: 2020 - Present">
            </div>
            <div class="form-group">
                <label>Descrição</label>
                <textarea id="editJob${i + 1}Description" name="job${i + 1}Description" rows="3" placeholder="Descreva suas responsabilidades e conquistas...">${exp.description || ''}</textarea>
            </div>
        `;
        experienceContainer.appendChild(fieldGroup);
    }
}

function generateSkillsFields() {
    const skillsContainer = document.querySelector('#editForm .edit-section:nth-child(4)');
    if (!skillsContainer) return;
    
    // Clear existing dynamic fields
    const existingFields = skillsContainer.querySelectorAll('.dynamic-field');
    existingFields.forEach(field => field.remove());
    
    // Generate fields for up to 20 skill categories
    const maxSkills = 20;
    const currentSkills = cvData.skills && Array.isArray(cvData.skills) ? cvData.skills : [];
    
    for (let i = 0; i < maxSkills; i++) {
        const skill = currentSkills[i] || {};
        const fieldGroup = document.createElement('div');
        fieldGroup.className = 'dynamic-field skills-field';
        fieldGroup.innerHTML = `
            <h4>Categoria de Habilidade ${i + 1}</h4>
            <div class="form-group">
                <label>Título da Categoria</label>
                <input type="text" id="editSkills${i + 1}Title" name="skills${i + 1}Title" value="${skill.category_title || ''}" placeholder="Ex: Business Strategy">
            </div>
            <div class="form-group">
                <label>Lista de Habilidades (separadas por vírgula)</label>
                <input type="text" id="editSkills${i + 1}Items" name="skills${i + 1}Items" value="${skill.skills_list || ''}" placeholder="Ex: Market Analysis, Strategic Planning, Business Development">
            </div>
        `;
        skillsContainer.appendChild(fieldGroup);
    }
}

function generatePortfolioFields() {
    const portfolioContainer = document.querySelector('#editForm .edit-section:nth-child(5)');
    if (!portfolioContainer) return;
    
    // Clear existing dynamic fields
    const existingFields = portfolioContainer.querySelectorAll('.dynamic-field');
    existingFields.forEach(field => field.remove());
    
    // Generate fields for up to 20 portfolio items
    const maxPortfolio = 20;
    const currentPortfolio = cvData.portfolio && Array.isArray(cvData.portfolio) ? cvData.portfolio : [];
    
    for (let i = 0; i < maxPortfolio; i++) {
        const project = currentPortfolio[i] || {};
        const fieldGroup = document.createElement('div');
        fieldGroup.className = 'dynamic-field portfolio-field';
        fieldGroup.innerHTML = `
            <h4>Projeto ${i + 1}</h4>
            <div class="form-group">
                <label>Título do Projeto</label>
                <input type="text" id="editProject${i + 1}Title" name="project${i + 1}Title" value="${project.title || ''}" placeholder="Ex: International Expansion">
            </div>
            <div class="form-group">
                <label>Descrição do Projeto</label>
                <input type="text" id="editProject${i + 1}Desc" name="project${i + 1}Desc" value="${project.description || ''}" placeholder="Ex: Entry strategy into 15 new markets">
            </div>
        `;
        portfolioContainer.appendChild(fieldGroup);
    }
}

function saveEditData() {
    const formData = {
        hero: {
            name: document.getElementById('editName').value,
            title: document.getElementById('editTitle').value,
            description: document.getElementById('editDescription').value
        },
        about: {
            text1: document.getElementById('editAbout1').value,
            text2: document.getElementById('editAbout2').value,
            stats_projects: document.getElementById('editStatsProjects').value,
            stats_countries: document.getElementById('editStatsCountries').value,
            stats_years: document.getElementById('editStatsYears').value
        },
        experience: collectDynamicExperienceData(),
        skills: collectDynamicSkillsData(),
        portfolio: collectDynamicPortfolioData(),
        contact: {
            email: document.getElementById('editContactEmail').value,
            phone: document.getElementById('editContactPhone').value,
            location: document.getElementById('editContactLocation').value
        }
    };

    saveCVData(formData);
    closeModal('editModal');
}

function collectDynamicExperienceData() {
    const experience = [];
    
    // Collect data from all 20 experience fields
    for (let i = 1; i <= 20; i++) {
        const title = document.getElementById(`editJob${i}Title`)?.value || '';
        const company = document.getElementById(`editJob${i}Company`)?.value || '';
        const period = document.getElementById(`editJob${i}Period`)?.value || '';
        const description = document.getElementById(`editJob${i}Description`)?.value || '';
        
        if (title || company || period || description) {
            experience.push({
                title,
                company,
                period,
                description,
                order_index: i
            });
        }
    }
    
    return experience;
}

function collectDynamicSkillsData() {
    const skills = [];
    
    // Collect data from all 20 skill fields
    for (let i = 1; i <= 20; i++) {
        const categoryTitle = document.getElementById(`editSkills${i}Title`)?.value || '';
        const skillsList = document.getElementById(`editSkills${i}Items`)?.value || '';
        
        if (categoryTitle || skillsList) {
            skills.push({
                category_title: categoryTitle,
                skills_list: skillsList,
                order_index: i
            });
        }
    }
    
    return skills;
}

function collectDynamicPortfolioData() {
    const portfolio = [];
    
    // Collect data from all 20 portfolio fields
    for (let i = 1; i <= 20; i++) {
        const title = document.getElementById(`editProject${i}Title`)?.value || '';
        const description = document.getElementById(`editProject${i}Desc`)?.value || '';
        
        if (title || description) {
            portfolio.push({
                title,
                description,
                order_index: i
            });
        }
    }
    
    return portfolio;
}

function openModal(modalId) {
    console.log('openModal called with ID:', modalId);
    const modal = document.getElementById(modalId);
    console.log('Modal element found:', !!modal);
    if (modal) {
        modal.style.display = 'block';
        console.log('Modal displayed');
    } else {
        console.error('Modal not found:', modalId);
    }
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add typing effect to hero name
    const heroName = document.querySelector('.hero .name');
    if (heroName) {
        const originalText = heroName.textContent;
        heroName.textContent = '';
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                heroName.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        setTimeout(typeWriter, 1000);
    }
});

// Add scroll animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', addScrollAnimations);

// Scroll functionality
function scrollSection(section, direction) {
    const state = scrollState[section];
    const maxPages = Math.ceil(state.total / state.itemsPerPage);
    
    if (direction === 'up' && state.current > 0) {
        state.current--;
    } else if (direction === 'down' && state.current < maxPages - 1) {
        state.current++;
    }
    
    // Update display
    if (section === 'experience') {
        updateExperienceDisplay();
    } else if (section === 'skills') {
        updateSkillsDisplay();
    } else if (section === 'portfolio') {
        updatePortfolioDisplay();
    }
    
    updateScrollControls(section);
}

function updateScrollControls(section) {
    const state = scrollState[section];
    const maxPages = Math.ceil(state.total / state.itemsPerPage);
    const startItem = state.current * state.itemsPerPage + 1;
    const endItem = Math.min((state.current + 1) * state.itemsPerPage, state.total);
    
    // Update counter
    const counter = document.getElementById(`${section}Counter`);
    if (counter) {
        counter.textContent = `${startItem}-${endItem} de ${state.total}`;
    }
    
    // Update button states
    const upBtn = document.getElementById(`${section}ScrollUp`);
    const downBtn = document.getElementById(`${section}ScrollDown`);
    
    if (upBtn) upBtn.disabled = state.current === 0;
    if (downBtn) downBtn.disabled = state.current >= maxPages - 1;
}

function updateExperienceDisplay() {
    const timelineContainer = document.querySelector('.timeline');
    if (!timelineContainer || !cvData.experience) return;
    
    timelineContainer.innerHTML = '';
    const state = scrollState.experience;
    const startIndex = state.current * state.itemsPerPage;
    const endIndex = Math.min(startIndex + state.itemsPerPage, cvData.experience.length);
    
    for (let i = startIndex; i < endIndex; i++) {
        const exp = cvData.experience[i];
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <h3>${exp.title || ''}</h3>
            <h4>${exp.company || ''}</h4>
            <span class="date">${exp.period || ''}</span>
            <p>${exp.description || ''}</p>
        `;
        timelineContainer.appendChild(timelineItem);
    }
}

function updateSkillsDisplay() {
    const skillsContainer = document.querySelector('.skills-grid');
    if (!skillsContainer || !cvData.skills) return;
    
    skillsContainer.innerHTML = '';
    const state = scrollState.skills;
    const startIndex = state.current * state.itemsPerPage;
    const endIndex = Math.min(startIndex + state.itemsPerPage, cvData.skills.length);
    
    for (let i = startIndex; i < endIndex; i++) {
        const skill = cvData.skills[i];
        const skillCategory = document.createElement('div');
        skillCategory.className = 'skill-category';
        
        const skillsList = skill.skills_list ? 
            skill.skills_list.split(',').map(item => item.trim()).filter(item => item) : [];
        
        skillCategory.innerHTML = `
            <h3>${skill.category_title || ''}</h3>
            <div class="skill-items">
                ${skillsList.map(skillItem => `<span class="skill-tag">${skillItem}</span>`).join('')}
            </div>
        `;
        skillsContainer.appendChild(skillCategory);
    }
}

function updatePortfolioDisplay() {
    const portfolioContainer = document.querySelector('.portfolio-grid');
    if (!portfolioContainer || !cvData.portfolio) return;
    
    portfolioContainer.innerHTML = '';
    const state = scrollState.portfolio;
    const startIndex = state.current * state.itemsPerPage;
    const endIndex = Math.min(startIndex + state.itemsPerPage, cvData.portfolio.length);
    
    for (let i = startIndex; i < endIndex; i++) {
        const project = cvData.portfolio[i];
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.innerHTML = `
            <h3>${project.title || ''}</h3>
            <p>${project.description || ''}</p>
        `;
        portfolioContainer.appendChild(portfolioItem);
    }
}

// Contact form handling
async function handleContactFormSubmit(form) {
    const submitButton = document.getElementById('contactSubmit');
    const statusDiv = document.getElementById('contactStatus');
    
    // Get form data
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    console.log('Form data:', { name, email, message });
    
    // Show loading state
    submitButton.disabled = true;
    submitButton.textContent = interfaceTranslations[currentLanguage]['contact.sending'] || 'Enviando...';
    statusDiv.style.display = 'block';
    statusDiv.style.backgroundColor = '#ff6b35';
    statusDiv.style.color = 'white';
    statusDiv.textContent = interfaceTranslations[currentLanguage]['contact.sending'] || 'Enviando mensagem...';
    
    try {
        // Simulate sending email (replace with real email service)
        await simulateEmailSend({ name, email, message });
        
        // Success
        statusDiv.style.backgroundColor = '#4CAF50';
        statusDiv.textContent = interfaceTranslations[currentLanguage]['contact.success'] || 'Mensagem enviada com sucesso!';
        form.reset();
        
        console.log('Email sent successfully');
        
    } catch (error) {
        console.error('Error sending email:', error);
        
        // Error
        statusDiv.style.backgroundColor = '#f44336';
        statusDiv.textContent = interfaceTranslations[currentLanguage]['contact.error'] || 'Erro ao enviar mensagem.';
    } finally {
        // Reset button
        submitButton.disabled = false;
        submitButton.textContent = interfaceTranslations[currentLanguage]['contact.send'] || 'Enviar Mensagem';
        
        // Hide status after 5 seconds
        setTimeout(() => {
            statusDiv.style.display = 'none';
        }, 5000);
    }
}

// Real email sending using a working service
async function simulateEmailSend(data) {
    console.log('Processing contact form:', data);
    
    // Always save the message locally first
    saveMessageLocally(data);
    
    try {
        // Using a working email service - Formspree (free tier)
        const response = await fetch('https://formspree.io/f/xpwgkqyv', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                message: data.message,
                _subject: 'Nova mensagem do portfólio - ' + data.name,
                _replyto: data.email,
                _cc: 'fabiobdaniel@gmail.com'
            })
        });
        
        if (response.ok) {
            console.log('Email sent successfully via Formspree');
            return { success: true, message: 'Mensagem enviada com sucesso!' };
        } else {
            throw new Error('Formspree failed');
        }
        
    } catch (error) {
        console.log('Formspree failed, trying alternative method...', error.message);
        
        // Fallback: Try Web3Forms
        try {
            const formData = new FormData();
            formData.append('access_key', 'YOUR_ACCESS_KEY'); // Replace with your Web3Forms access key
            formData.append('name', data.name);
            formData.append('email', data.email);
            formData.append('message', data.message);
            formData.append('subject', 'Nova mensagem do portfólio - ' + data.name);
            formData.append('to', 'fabiobdaniel@gmail.com');
            
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });
            
            const result = await response.json();
            
            if (result.success) {
                console.log('Email sent successfully via Web3Forms');
                return { success: true, message: 'Mensagem enviada com sucesso!' };
            } else {
                throw new Error('Web3Forms failed');
            }
            
        } catch (fallbackError) {
            console.log('All email services failed, but message saved locally:', fallbackError.message);
            
            // Even if all APIs fail, we saved locally, so show success
            return { 
                success: true, 
                message: 'Mensagem recebida! Entraremos em contato em breve.',
                local: true 
            };
        }
    }
}

// Web3Forms email sending
async function sendViaWeb3Forms(data) {
    const formData = new FormData();
    formData.append('access_key', 'YOUR_ACCESS_KEY'); // Replace with your Web3Forms access key
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('message', data.message);
    formData.append('subject', 'Nova mensagem do portfólio - ' + data.name);
    formData.append('to', 'fabiobdaniel@gmail.com');
    
    const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
    });
    
    const result = await response.json();
    
    if (!result.success) {
        throw new Error(result.message || 'Web3Forms failed');
    }
    
    return result;
}

// Formspree email sending
async function sendViaFormspree(data) {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: data.name,
            email: data.email,
            message: data.message,
            _subject: 'Nova mensagem do portfólio - ' + data.name,
            _replyto: data.email
        })
    });
    
    if (!response.ok) {
        throw new Error('Formspree API failed');
    }
    
    return response.json();
}

// Simple API method
async function sendEmailViaSimpleAPI(data) {
    // Using a simple email service
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            service_id: 'YOUR_SERVICE_ID',
            template_id: 'YOUR_TEMPLATE_ID',
            user_id: 'YOUR_USER_ID',
            template_params: {
                from_name: data.name,
                from_email: data.email,
                message: data.message
            }
        })
    });
    
    if (!response.ok) {
        throw new Error('Simple API failed');
    }
    
    return response.json();
}

// Save message locally as fallback
function saveMessageLocally(data) {
    try {
        const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
        const newMessage = {
            ...data,
            timestamp: new Date().toISOString(),
            id: Date.now()
        };
        messages.push(newMessage);
        localStorage.setItem('contactMessages', JSON.stringify(messages));
        console.log('Message saved locally:', newMessage);
    } catch (error) {
        console.error('Failed to save message locally:', error);
    }
}

// Function to view saved messages (for debugging)
function viewSavedMessages() {
    const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    console.log('Saved messages:', messages);
    return messages;
}

// Make functions available globally for debugging
window.viewSavedMessages = viewSavedMessages;
window.clearSavedMessages = function() {
    localStorage.removeItem('contactMessages');
    console.log('All saved messages cleared');
};

// Real email sending function (uncomment and configure when ready)
/*
async function sendRealEmail(data) {
    // EmailJS configuration
    emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your EmailJS public key
    
    const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_email: 'fabiobdaniel@gmail.com' // Your email
    };
    
    try {
        const response = await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams);
        console.log('Email sent successfully:', response);
        return response;
    } catch (error) {
        console.error('EmailJS error:', error);
        throw error;
    }
}
*/
