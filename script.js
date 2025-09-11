// Global variables
let currentLanguage = 'en'; // Padrão em inglês
let cvData = {};
let allLanguageData = {}; // Armazenar todos os dados de todos os idiomas

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
        'edit.save': 'Salvar Alterações'
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
        'edit.save': 'Save Changes'
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
        'edit.save': 'Guardar Cambios'
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    initializeApp();
});

function initializeApp() {
    console.log('Initializing app...');
    
    // Set up event listeners
    setupEventListeners();
    
    // Load CV data from API
    loadCVData();
    
    console.log('App initialized successfully!');
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
            if (allLanguageData[currentLanguage]) {
                cvData = allLanguageData[currentLanguage];
                updatePageContent();
                applyInterfaceTranslations();
            } else {
                // Se não temos os dados, carregar
                loadCVData();
            }
        });
    } else {
        console.error('Language selector not found!');
    }

    // Edit button
    const editModeBtn = document.getElementById('editModeBtn');
    if (editModeBtn) {
        editModeBtn.addEventListener('click', function() {
            console.log('Edit button clicked');
            openEditModal();
        });
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
            alert('Mensagem enviada com sucesso!');
            this.reset();
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

    // Scroll controls
    setupScrollControls();
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
            email: 'fabio@fbdglobal.com',
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
        // Atualizar dados na memória
        allLanguageData[currentLanguage] = data;
        cvData = data;
        
        // Salvar no localStorage como backup
        localStorage.setItem('cvData', JSON.stringify(allLanguageData));
        
        // Atualizar a interface
        updatePageContent();
        
        alert('Dados salvos com sucesso!');
        console.log('Data saved for language:', currentLanguage, data);
    } catch (error) {
        console.error('Error saving CV data:', error);
        alert('Erro ao salvar dados');
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
    console.log('Updating page content with data:', cvData);
    if (!cvData) {
        console.log('No CV data available');
        return;
    }

    // Hero section
    console.log('Updating hero section:', cvData.hero);
    updateElement('.hero .name', cvData.hero?.name);
    updateElement('.hero .title', cvData.hero?.title);
    updateElement('.hero .description', cvData.hero?.description);

    // About section
    updateElement('.about-text p:first-child', cvData.about?.text1);
    updateElement('.about-text p:last-child', cvData.about?.text2);
    updateElement('.stat:nth-child(1) h3', cvData.about?.stats_projects);
    updateElement('.stat:nth-child(1) p', cvData.about?.stats_projects_label);
    updateElement('.stat:nth-child(2) h3', cvData.about?.stats_countries);
    updateElement('.stat:nth-child(2) p', cvData.about?.stats_countries_label);
    updateElement('.stat:nth-child(3) h3', cvData.about?.stats_years);
    updateElement('.stat:nth-child(3) p', cvData.about?.stats_years_label);

    // Experience section - trabalhar com arrays dinamicamente
    if (cvData.experience && Array.isArray(cvData.experience)) {
        console.log('=== UPDATING EXPERIENCE ===');
        console.log('Experience data:', cvData.experience);
        console.log('Number of experiences:', cvData.experience.length);
        
        // Update scroll state
        scrollState.experience.total = cvData.experience.length;
        scrollState.experience.current = 0; // Reset to first page
        
        const timelineContainer = document.querySelector('.timeline');
        if (timelineContainer) {
            console.log('Timeline container found, clearing content...');
            // Limpar conteúdo existente
            timelineContainer.innerHTML = '';
            
            // Show paginated experiences
            updateExperienceDisplay();
            updateScrollControls('experience');
        } else {
            console.error('Timeline container not found!');
        }
    } else {
        console.log('No experience data or not an array:', cvData.experience);
    }

    // Skills section - trabalhar com arrays dinamicamente
    if (cvData.skills && Array.isArray(cvData.skills)) {
        console.log('=== UPDATING SKILLS ===');
        console.log('Skills data:', cvData.skills);
        console.log('Number of skill categories:', cvData.skills.length);
        
        // Update scroll state
        scrollState.skills.total = cvData.skills.length;
        scrollState.skills.current = 0; // Reset to first page
        
        const skillsContainer = document.querySelector('.skills-grid');
        if (skillsContainer) {
            console.log('Skills container found, clearing content...');
            // Limpar conteúdo existente
            skillsContainer.innerHTML = '';
            
            // Show paginated skills
            updateSkillsDisplay();
            updateScrollControls('skills');
        } else {
            console.error('Skills container not found!');
        }
    } else {
        console.log('No skills data or not an array:', cvData.skills);
    }

    // Portfolio section - trabalhar com arrays dinamicamente
    if (cvData.portfolio && Array.isArray(cvData.portfolio)) {
        console.log('=== UPDATING PORTFOLIO ===');
        console.log('Portfolio data:', cvData.portfolio);
        console.log('Number of portfolio items:', cvData.portfolio.length);
        
        // Update scroll state
        scrollState.portfolio.total = cvData.portfolio.length;
        scrollState.portfolio.current = 0; // Reset to first page
        
        const portfolioContainer = document.querySelector('.portfolio-grid');
        if (portfolioContainer) {
            console.log('Portfolio container found, clearing content...');
            // Limpar conteúdo existente
            portfolioContainer.innerHTML = '';
            
            // Show paginated portfolio
            updatePortfolioDisplay();
            updateScrollControls('portfolio');
        } else {
            console.error('Portfolio container not found!');
        }
    } else {
        console.log('No portfolio data or not an array:', cvData.portfolio);
    }

    // Contact section
    updateElement('.contact-item:nth-child(1) span', cvData.contact?.email);
    updateElement('.contact-item:nth-child(2) span', cvData.contact?.phone);
    updateElement('.contact-item:nth-child(3) span', cvData.contact?.location);

    // Cards section - trabalhar com arrays dinamicamente
    if (cvData.cards && Array.isArray(cvData.cards)) {
        const cardsContainer = document.querySelector('.cards-grid');
        if (cardsContainer) {
            // Limpar conteúdo existente
            cardsContainer.innerHTML = '';
            
            // Criar elementos dinamicamente para cada card
            cvData.cards.forEach((card, index) => {
                const cardElement = document.createElement('div');
                cardElement.className = 'card';
                cardElement.innerHTML = `
                    <h3>${card.title || ''}</h3>
                    <p>${card.description || ''}</p>
                `;
                cardsContainer.appendChild(cardElement);
            });
        }
    }
}

function updateElement(selector, content) {
    const element = document.querySelector(selector);
    console.log(`Updating ${selector} with:`, content);
    if (element && content) {
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
    // Reset form and show login section
    document.getElementById('editFormContainer').style.display = 'none';
    document.querySelector('.edit-section').style.display = 'block';
    document.getElementById('editUsername').value = '';
    document.getElementById('editPassword').value = '';
    document.getElementById('editLanguageSelect').value = currentLanguage;
    openModal('editModal');
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
    document.getElementById(modalId).style.display = 'block';
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
