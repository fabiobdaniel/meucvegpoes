// Global variables
let currentLanguage = 'en'; // Padrão em inglês
let cvData = {};
const API_BASE_URL = 'api/';

// Translation data
const translations = {
    pt: {
        'nav.home': 'Início',
        'nav.about': 'Sobre',
        'nav.experience': 'Experiência',
        'nav.skills': 'Habilidades',
        'nav.portfolio': 'Portfólio',
        'nav.contact': 'Contato',
        'hero.name': 'Fabio Bittencourt Daniel',
        'hero.title': 'Estrategista de Negócios Globais & Desenvolvimento Empresarial',
        'hero.description': 'Ao longo da minha trajetória em Estratégia de Negócios Globais, desenvolvi habilidades essenciais para liderar transformações empresariais, construir parcerias estratégicas e entender as necessidades do mercado internacional. Agora, trago essa experiência para a área de Desenvolvimento Empresarial, onde sigo focada em proporcionar soluções de alto valor, fortalecer conexões globais e impulsionar o crescimento e inovação.',
        'hero.contact': 'Entre em Contato',
        'hero.learn': 'Saiba Mais',
        'cards.innovation.title': 'Inovação',
        'cards.innovation.desc': 'Sempre à frente das tendências',
        'cards.leadership.title': 'Liderança',
        'cards.leadership.desc': 'Gestão de equipes de alta performance',
        'cards.results.title': 'Resultados',
        'cards.results.desc': 'Foco em entregas de valor',
        'about.title': 'Sobre Mim',
        'about.text1': 'Profissional experiente em estratégias de negócios globais com mais de 10 anos de experiência no mercado internacional.',
        'about.text2': 'Especializado em desenvolvimento de estratégias de expansão, análise de mercados emergentes e implementação de soluções inovadoras para empresas multinacionais.',
        'about.stats.projects': '+50',
        'about.stats.projectsLabel': 'Projetos Concluídos',
        'about.stats.countries': '+20',
        'about.stats.countriesLabel': 'Países Atendidos',
        'about.stats.years': '10+',
        'about.stats.yearsLabel': 'Anos de Experiência',
        'experience.title': 'Experiência Profissional',
        'experience.job1.title': 'CEO & Fundador',
        'experience.job1.company': 'FBD Global Business Strategy',
        'experience.job1.period': '2020 - Presente',
        'experience.job1.description': 'Liderança estratégica da empresa, desenvolvimento de parcerias internacionais e implementação de soluções inovadoras para clientes globais.',
        'experience.job2.title': 'Diretor de Estratégia',
        'experience.job2.company': 'Empresa Multinacional',
        'experience.job2.period': '2018 - 2020',
        'experience.job2.description': 'Desenvolvimento e implementação de estratégias de expansão internacional, análise de mercados e gestão de equipes multiculturais.',
        'skills.title': 'Habilidades',
        'skills.strategy.title': 'Estratégia de Negócios',
        'skills.strategy.item1': 'Análise de Mercado',
        'skills.strategy.item2': 'Planejamento Estratégico',
        'skills.strategy.item3': 'Desenvolvimento de Negócios',
        'skills.leadership.title': 'Liderança',
        'skills.leadership.item1': 'Gestão de Equipes',
        'skills.leadership.item2': 'Comunicação Intercultural',
        'skills.leadership.item3': 'Tomada de Decisão',
        'skills.tech.title': 'Tecnologia',
        'skills.tech.item1': 'Análise de Dados',
        'skills.tech.item2': 'Ferramentas de Gestão',
        'skills.tech.item3': 'Inovação Digital',
        'portfolio.title': 'Portfólio',
        'portfolio.project1.title': 'Expansão Internacional',
        'portfolio.project1.desc': 'Estratégia de entrada em 15 novos mercados',
        'portfolio.project2.title': 'Parcerias Estratégicas',
        'portfolio.project2.desc': 'Desenvolvimento de alianças globais',
        'portfolio.project3.title': 'Crescimento de Receita',
        'portfolio.project3.desc': 'Aumento de 300% em 3 anos',
        'contact.title': 'Contato',
        'contact.send': 'Enviar Mensagem',
        'edit.title': 'Editar Dados do CV',
        'edit.hero.name': 'Nome Completo',
        'edit.hero.title': 'Título Profissional',
        'edit.hero.description': 'Descrição',
        'edit.about.text1': 'Sobre - Texto 1',
        'edit.about.text2': 'Sobre - Texto 2',
        'edit.cancel': 'Cancelar',
        'edit.save': 'Salvar Alterações',
        'edit.sections.hero': 'Seção Principal',
        'edit.sections.about': 'Sobre Mim',
        'edit.sections.experience': 'Experiência Profissional',
        'edit.sections.skills': 'Habilidades',
        'edit.sections.portfolio': 'Portfólio',
        'edit.sections.contact': 'Contato',
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
        'edit.login.title': 'Confirmação de Segurança',
        'edit.login.message': 'Digite suas credenciais para acessar a edição:',
        'edit.login.submit': 'Confirmar e Editar',
        'login.title': 'Login Administrativo',
        'login.username': 'Usuário',
        'login.password': 'Senha',
        'login.submit': 'Entrar'
    },
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.skills': 'Skills',
        'nav.portfolio': 'Portfolio',
        'nav.contact': 'Contact',
        'hero.name': 'Fabio Bittencourt Daniel',
        'hero.title': 'Global Business Strategist & Business Development',
        'hero.description': 'Throughout my career in Global Business Strategy, I have developed essential skills to lead business transformations, build strategic partnerships and understand the needs of the international market. Now, I bring this experience to the Business Development area, where I remain focused on providing high-value solutions, strengthening global connections and driving growth and innovation.',
        'hero.contact': 'Get in Touch',
        'hero.learn': 'Learn More',
        'cards.innovation.title': 'Innovation',
        'cards.innovation.desc': 'Always ahead of trends',
        'cards.leadership.title': 'Leadership',
        'cards.leadership.desc': 'High-performance team management',
        'cards.results.title': 'Results',
        'cards.results.desc': 'Focus on value delivery',
        'about.title': 'About Me',
        'about.text1': 'Experienced professional in global business strategies with more than 10 years of experience in the international market.',
        'about.text2': 'Specialized in developing expansion strategies, analyzing emerging markets and implementing innovative solutions for multinational companies.',
        'about.stats.projects': '+50',
        'about.stats.projectsLabel': 'Completed Projects',
        'about.stats.countries': '+20',
        'about.stats.countriesLabel': 'Countries Served',
        'about.stats.years': '10+',
        'about.stats.yearsLabel': 'Years of Experience',
        'experience.title': 'Professional Experience',
        'experience.job1.title': 'CEO & Founder',
        'experience.job1.company': 'FBD Global Business Strategy',
        'experience.job1.period': '2020 - Present',
        'experience.job1.description': 'Strategic leadership of the company, development of international partnerships and implementation of innovative solutions for global clients.',
        'experience.job2.title': 'Strategy Director',
        'experience.job2.company': 'Multinational Company',
        'experience.job2.period': '2018 - 2020',
        'experience.job2.description': 'Development and implementation of international expansion strategies, market analysis and management of multicultural teams.',
        'skills.title': 'Skills',
        'skills.strategy.title': 'Business Strategy',
        'skills.strategy.item1': 'Market Analysis',
        'skills.strategy.item2': 'Strategic Planning',
        'skills.strategy.item3': 'Business Development',
        'skills.leadership.title': 'Leadership',
        'skills.leadership.item1': 'Team Management',
        'skills.leadership.item2': 'Cross-cultural Communication',
        'skills.leadership.item3': 'Decision Making',
        'skills.tech.title': 'Technology',
        'skills.tech.item1': 'Data Analysis',
        'skills.tech.item2': 'Management Tools',
        'skills.tech.item3': 'Digital Innovation',
        'portfolio.title': 'Portfolio',
        'portfolio.project1.title': 'International Expansion',
        'portfolio.project1.desc': 'Entry strategy into 15 new markets',
        'portfolio.project2.title': 'Strategic Partnerships',
        'portfolio.project2.desc': 'Development of global alliances',
        'portfolio.project3.title': 'Revenue Growth',
        'portfolio.project3.desc': '300% increase in 3 years',
        'contact.title': 'Contact',
        'contact.send': 'Send Message',
        'edit.title': 'Edit CV Data',
        'edit.hero.name': 'Full Name',
        'edit.hero.title': 'Professional Title',
        'edit.hero.description': 'Description',
        'edit.about.text1': 'About - Text 1',
        'edit.about.text2': 'About - Text 2',
        'edit.cancel': 'Cancel',
        'edit.save': 'Save Changes',
        'edit.sections.hero': 'Main Section',
        'edit.sections.about': 'About Me',
        'edit.sections.experience': 'Professional Experience',
        'edit.sections.skills': 'Skills',
        'edit.sections.portfolio': 'Portfolio',
        'edit.sections.contact': 'Contact',
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
        'edit.login.title': 'Security Confirmation',
        'edit.login.message': 'Enter your credentials to access editing:',
        'edit.login.submit': 'Confirm and Edit',
        'login.title': 'Administrative Login',
        'login.username': 'Username',
        'login.password': 'Password',
        'login.submit': 'Login'
    },
    es: {
        'nav.home': 'Inicio',
        'nav.about': 'Acerca',
        'nav.experience': 'Experiencia',
        'nav.skills': 'Habilidades',
        'nav.portfolio': 'Portafolio',
        'nav.contact': 'Contacto',
        'hero.name': 'Fabio Bittencourt Daniel',
        'hero.title': 'Estratega de Negocios Globales y Desarrollo Empresarial',
        'hero.description': 'A lo largo de mi trayectoria en Estrategia de Negocios Globales, he desarrollado habilidades esenciales para liderar transformaciones empresariales, construir alianzas estratégicas y entender las necesidades del mercado internacional. Ahora, traigo esta experiencia al área de Desarrollo Empresarial, donde sigo enfocado en proporcionar soluciones de alto valor, fortalecer conexiones globales e impulsar el crecimiento y la innovación.',
        'hero.contact': 'Ponte en Contacto',
        'hero.learn': 'Saber Más',
        'cards.innovation.title': 'Innovación',
        'cards.innovation.desc': 'Siempre a la vanguardia de las tendencias',
        'cards.leadership.title': 'Liderazgo',
        'cards.leadership.desc': 'Gestión de equipos de alto rendimiento',
        'cards.results.title': 'Resultados',
        'cards.results.desc': 'Enfoque en la entrega de valor',
        'about.title': 'Acerca de Mí',
        'about.text1': 'Profesional experimentado en estrategias de negocios globales con más de 10 años de experiencia en el mercado internacional.',
        'about.text2': 'Especializado en el desarrollo de estrategias de expansión, análisis de mercados emergentes e implementación de soluciones innovadoras para empresas multinacionales.',
        'about.stats.projects': '+50',
        'about.stats.projectsLabel': 'Proyectos Completados',
        'about.stats.countries': '+20',
        'about.stats.countriesLabel': 'Países Atendidos',
        'about.stats.years': '10+',
        'about.stats.yearsLabel': 'Años de Experiencia',
        'experience.title': 'Experiencia Profesional',
        'experience.job1.title': 'CEO y Fundador',
        'experience.job1.company': 'FBD Global Business Strategy',
        'experience.job1.period': '2020 - Presente',
        'experience.job1.description': 'Liderazgo estratégico de la empresa, desarrollo de alianzas internacionales e implementación de soluciones innovadoras para clientes globales.',
        'experience.job2.title': 'Director de Estrategia',
        'experience.job2.company': 'Empresa Multinacional',
        'experience.job2.period': '2018 - 2020',
        'experience.job2.description': 'Desarrollo e implementación de estrategias de expansión internacional, análisis de mercados y gestión de equipos multiculturales.',
        'skills.title': 'Habilidades',
        'skills.strategy.title': 'Estrategia de Negocios',
        'skills.strategy.item1': 'Análisis de Mercado',
        'skills.strategy.item2': 'Planificación Estratégica',
        'skills.strategy.item3': 'Desarrollo de Negocios',
        'skills.leadership.title': 'Liderazgo',
        'skills.leadership.item1': 'Gestión de Equipos',
        'skills.leadership.item2': 'Comunicación Intercultural',
        'skills.leadership.item3': 'Toma de Decisiones',
        'skills.tech.title': 'Tecnología',
        'skills.tech.item1': 'Análisis de Datos',
        'skills.tech.item2': 'Herramientas de Gestión',
        'skills.tech.item3': 'Innovación Digital',
        'portfolio.title': 'Portafolio',
        'portfolio.project1.title': 'Expansión Internacional',
        'portfolio.project1.desc': 'Estrategia de entrada en 15 nuevos mercados',
        'portfolio.project2.title': 'Alianzas Estratégicas',
        'portfolio.project2.desc': 'Desarrollo de alianzas globales',
        'portfolio.project3.title': 'Crecimiento de Ingresos',
        'portfolio.project3.desc': 'Aumento del 300% en 3 años',
        'contact.title': 'Contacto',
        'contact.send': 'Enviar Mensaje',
        'edit.title': 'Editar Datos del CV',
        'edit.hero.name': 'Nombre Completo',
        'edit.hero.title': 'Título Profesional',
        'edit.hero.description': 'Descripción',
        'edit.about.text1': 'Acerca - Texto 1',
        'edit.about.text2': 'Acerca - Texto 2',
        'edit.cancel': 'Cancelar',
        'edit.save': 'Guardar Cambios',
        'edit.sections.hero': 'Sección Principal',
        'edit.sections.about': 'Acerca de Mí',
        'edit.sections.experience': 'Experiencia Profesional',
        'edit.sections.skills': 'Habilidades',
        'edit.sections.portfolio': 'Portafolio',
        'edit.sections.contact': 'Contacto',
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
        'edit.login.title': 'Confirmación de Seguridad',
        'edit.login.message': 'Ingrese sus credenciales para acceder a la edición:',
        'edit.login.submit': 'Confirmar y Editar',
        'login.title': 'Inicio de Sesión Administrativo',
        'login.username': 'Usuario',
        'login.password': 'Contraseña',
        'login.submit': 'Entrar'
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    initializeApp();
});

// Also try to initialize if DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

function initializeApp() {
    console.log('Initializing app...');
    
    // Load saved data
    loadSavedData();
    
    // Set up event listeners
    setupEventListeners();
    
    // Apply current language
    applyLanguage(currentLanguage);
    
    // Check for admin session
    checkAdminSession();
    
    // Show admin login button
    showAdminLoginButton();
    
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
            applyLanguage(currentLanguage);
            saveData();
        });
    } else {
        console.error('Language selector not found!');
    }

    // Admin login
    const adminForm = document.getElementById('adminForm');
    if (adminForm) {
        adminForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('adminUsername').value;
            const password = document.getElementById('adminPassword').value;
            
            // Validar credenciais
            if (username === 'fabio' && password === '1407') {
                isAdmin = true;
                showEditButton();
                hideAdminLoginButton();
                closeModal('adminModal');
                alert('Login realizado com sucesso!');
                // Limpar formulário
                document.getElementById('adminUsername').value = '';
                document.getElementById('adminPassword').value = '';
            } else {
                alert('Usuário ou senha incorretos!');
            }
        });
    } else {
        console.error('Admin form not found!');
    }

    // Edit button
    const editModeBtn = document.getElementById('editModeBtn');
    if (editModeBtn) {
        editModeBtn.addEventListener('click', function() {
            console.log('Edit button clicked');
            openEditLoginModal();
        });
    } else {
        console.error('Edit button not found!');
    }

    // Edit login form
    const editLoginForm = document.getElementById('editLoginForm');
    if (editLoginForm) {
        editLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('editLoginUsername').value;
            const password = document.getElementById('editLoginPassword').value;
            
            // Validar credenciais para edição
            if (username === 'fabio' && password === '1407') {
                canEdit = true;
                closeModal('editLoginModal');
                openEditModal();
                // Limpar formulário
                document.getElementById('editLoginUsername').value = '';
                document.getElementById('editLoginPassword').value = '';
                
                // Definir timeout de 30 minutos para sessão de edição
                if (editSessionTimeout) {
                    clearTimeout(editSessionTimeout);
                }
                editSessionTimeout = setTimeout(() => {
                    canEdit = false;
                    alert('Sessão de edição expirada. Faça login novamente.');
                }, 30 * 60 * 1000); // 30 minutos
                
                // Adicionar indicador visual de sessão ativa
                showEditSessionIndicator();
                
            } else {
                alert('Credenciais incorretas! Acesso negado.');
            }
        });
    } else {
        console.error('Edit login form not found!');
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

    // Admin login button
    const adminLoginBtn = document.getElementById('adminLoginBtn');
    if (adminLoginBtn) {
        adminLoginBtn.addEventListener('click', function() {
            console.log('Admin login button clicked');
            openModal('adminModal');
        });
    } else {
        console.error('Admin login button not found!');
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
            // Reset edit session when edit modal is closed
            if (e.target.id === 'editModal') {
                canEdit = false;
                hideEditSessionIndicator();
                if (editSessionTimeout) {
                    clearTimeout(editSessionTimeout);
                }
            }
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
}

function applyLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update placeholders
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Update language selector
    document.getElementById('languageSelect').value = lang;
}

function showEditButton() {
    const editBtn = document.getElementById('editModeBtn');
    if (editBtn) {
        editBtn.style.display = 'block';
    }
}

function showAdminLoginButton() {
    const adminLoginBtn = document.getElementById('adminLoginBtn');
    if (adminLoginBtn) {
        adminLoginBtn.style.display = 'flex';
    }
}

function hideAdminLoginButton() {
    const adminLoginBtn = document.getElementById('adminLoginBtn');
    if (adminLoginBtn) {
        adminLoginBtn.style.display = 'none';
    }
}

function showEditSessionIndicator() {
    const editBtn = document.getElementById('editModeBtn');
    if (editBtn) {
        editBtn.innerHTML = '<i class="fas fa-edit"></i> Editar <span style="color: #ffc107; margin-left: 5px;">●</span>';
        editBtn.style.background = '#ff6b35';
        editBtn.style.animation = 'pulse 2s infinite';
    }
}

function hideEditSessionIndicator() {
    const editBtn = document.getElementById('editModeBtn');
    if (editBtn) {
        editBtn.innerHTML = '<i class="fas fa-edit"></i> Editar';
        editBtn.style.background = '#ff6b35';
        editBtn.style.animation = 'none';
    }
}

function openEditLoginModal() {
    openModal('editLoginModal');
}

function openEditModal() {
    if (!canEdit) {
        alert('Sessão de edição expirada. Faça login novamente.');
        openEditLoginModal();
        return;
    }
    loadCurrentDataToEdit();
    openModal('editModal');
}

function loadCurrentDataToEdit() {
    // Load current displayed data into edit form
    const nameElement = document.querySelector('.hero .name');
    const titleElement = document.querySelector('.hero .title');
    const descriptionElement = document.querySelector('.hero .description');
    const about1Element = document.querySelector('.about-text p:first-child');
    const about2Element = document.querySelector('.about-text p:last-child');

    // Hero section
    document.getElementById('editName').value = nameElement ? nameElement.textContent : '';
    document.getElementById('editTitle').value = titleElement ? titleElement.textContent : '';
    document.getElementById('editDescription').value = descriptionElement ? descriptionElement.textContent : '';
    
    // About section
    document.getElementById('editAbout1').value = about1Element ? about1Element.textContent : '';
    document.getElementById('editAbout2').value = about2Element ? about2Element.textContent : '';
    
    // Stats
    const statsProjects = document.querySelector('.stat:nth-child(1) h3');
    const statsCountries = document.querySelector('.stat:nth-child(2) h3');
    const statsYears = document.querySelector('.stat:nth-child(3) h3');
    
    document.getElementById('editStatsProjects').value = statsProjects ? statsProjects.textContent : '';
    document.getElementById('editStatsCountries').value = statsCountries ? statsCountries.textContent : '';
    document.getElementById('editStatsYears').value = statsYears ? statsYears.textContent : '';
    
    // Experience
    const job1Title = document.querySelector('.timeline-item:nth-child(1) h3');
    const job1Company = document.querySelector('.timeline-item:nth-child(1) h4');
    const job1Period = document.querySelector('.timeline-item:nth-child(1) .date');
    const job1Desc = document.querySelector('.timeline-item:nth-child(1) p');
    
    document.getElementById('editJob1Title').value = job1Title ? job1Title.textContent : '';
    document.getElementById('editJob1Company').value = job1Company ? job1Company.textContent : '';
    document.getElementById('editJob1Period').value = job1Period ? job1Period.textContent : '';
    document.getElementById('editJob1Description').value = job1Desc ? job1Desc.textContent : '';
    
    const job2Title = document.querySelector('.timeline-item:nth-child(2) h3');
    const job2Company = document.querySelector('.timeline-item:nth-child(2) h4');
    const job2Period = document.querySelector('.timeline-item:nth-child(2) .date');
    const job2Desc = document.querySelector('.timeline-item:nth-child(2) p');
    
    document.getElementById('editJob2Title').value = job2Title ? job2Title.textContent : '';
    document.getElementById('editJob2Company').value = job2Company ? job2Company.textContent : '';
    document.getElementById('editJob2Period').value = job2Period ? job2Period.textContent : '';
    document.getElementById('editJob2Description').value = job2Desc ? job2Desc.textContent : '';
    
    // Skills
    const strategyTitle = document.querySelector('.skill-category:nth-child(1) h3');
    const strategyItems = document.querySelectorAll('.skill-category:nth-child(1) .skill-tag');
    const leadershipTitle = document.querySelector('.skill-category:nth-child(2) h3');
    const leadershipItems = document.querySelectorAll('.skill-category:nth-child(2) .skill-tag');
    const techTitle = document.querySelector('.skill-category:nth-child(3) h3');
    const techItems = document.querySelectorAll('.skill-category:nth-child(3) .skill-tag');
    
    document.getElementById('editSkillsStrategyTitle').value = strategyTitle ? strategyTitle.textContent : '';
    document.getElementById('editSkillsStrategyItems').value = Array.from(strategyItems).map(item => item.textContent).join(', ');
    
    document.getElementById('editSkillsLeadershipTitle').value = leadershipTitle ? leadershipTitle.textContent : '';
    document.getElementById('editSkillsLeadershipItems').value = Array.from(leadershipItems).map(item => item.textContent).join(', ');
    
    document.getElementById('editSkillsTechTitle').value = techTitle ? techTitle.textContent : '';
    document.getElementById('editSkillsTechItems').value = Array.from(techItems).map(item => item.textContent).join(', ');
    
    // Portfolio
    const project1Title = document.querySelector('.portfolio-item:nth-child(1) h3');
    const project1Desc = document.querySelector('.portfolio-item:nth-child(1) p');
    const project2Title = document.querySelector('.portfolio-item:nth-child(2) h3');
    const project2Desc = document.querySelector('.portfolio-item:nth-child(2) p');
    const project3Title = document.querySelector('.portfolio-item:nth-child(3) h3');
    const project3Desc = document.querySelector('.portfolio-item:nth-child(3) p');
    
    document.getElementById('editProject1Title').value = project1Title ? project1Title.textContent : '';
    document.getElementById('editProject1Desc').value = project1Desc ? project1Desc.textContent : '';
    document.getElementById('editProject2Title').value = project2Title ? project2Title.textContent : '';
    document.getElementById('editProject2Desc').value = project2Desc ? project2Desc.textContent : '';
    document.getElementById('editProject3Title').value = project3Title ? project3Title.textContent : '';
    document.getElementById('editProject3Desc').value = project3Desc ? project3Desc.textContent : '';
    
    // Contact
    const contactEmail = document.querySelector('.contact-item:nth-child(1) span');
    const contactPhone = document.querySelector('.contact-item:nth-child(2) span');
    const contactLocation = document.querySelector('.contact-item:nth-child(3) span');
    
    document.getElementById('editContactEmail').value = contactEmail ? contactEmail.textContent : '';
    document.getElementById('editContactPhone').value = contactPhone ? contactPhone.textContent : '';
    document.getElementById('editContactLocation').value = contactLocation ? contactLocation.textContent : '';
}

function saveEditData() {
    // Get form data
    const formData = {
        // Hero section
        name: document.getElementById('editName').value,
        title: document.getElementById('editTitle').value,
        description: document.getElementById('editDescription').value,
        
        // About section
        about1: document.getElementById('editAbout1').value,
        about2: document.getElementById('editAbout2').value,
        statsProjects: document.getElementById('editStatsProjects').value,
        statsCountries: document.getElementById('editStatsCountries').value,
        statsYears: document.getElementById('editStatsYears').value,
        
        // Experience
        job1Title: document.getElementById('editJob1Title').value,
        job1Company: document.getElementById('editJob1Company').value,
        job1Period: document.getElementById('editJob1Period').value,
        job1Description: document.getElementById('editJob1Description').value,
        job2Title: document.getElementById('editJob2Title').value,
        job2Company: document.getElementById('editJob2Company').value,
        job2Period: document.getElementById('editJob2Period').value,
        job2Description: document.getElementById('editJob2Description').value,
        
        // Skills
        skillsStrategyTitle: document.getElementById('editSkillsStrategyTitle').value,
        skillsStrategyItems: document.getElementById('editSkillsStrategyItems').value,
        skillsLeadershipTitle: document.getElementById('editSkillsLeadershipTitle').value,
        skillsLeadershipItems: document.getElementById('editSkillsLeadershipItems').value,
        skillsTechTitle: document.getElementById('editSkillsTechTitle').value,
        skillsTechItems: document.getElementById('editSkillsTechItems').value,
        
        // Portfolio
        project1Title: document.getElementById('editProject1Title').value,
        project1Desc: document.getElementById('editProject1Desc').value,
        project2Title: document.getElementById('editProject2Title').value,
        project2Desc: document.getElementById('editProject2Desc').value,
        project3Title: document.getElementById('editProject3Title').value,
        project3Desc: document.getElementById('editProject3Desc').value,
        
        // Contact
        contactEmail: document.getElementById('editContactEmail').value,
        contactPhone: document.getElementById('editContactPhone').value,
        contactLocation: document.getElementById('editContactLocation').value
    };

    // Update current language translations
    translations[currentLanguage]['hero.name'] = formData.name;
    translations[currentLanguage]['hero.title'] = formData.title;
    translations[currentLanguage]['hero.description'] = formData.description;
    
    translations[currentLanguage]['about.text1'] = formData.about1;
    translations[currentLanguage]['about.text2'] = formData.about2;
    translations[currentLanguage]['about.stats.projects'] = formData.statsProjects;
    translations[currentLanguage]['about.stats.countries'] = formData.statsCountries;
    translations[currentLanguage]['about.stats.years'] = formData.statsYears;
    
    translations[currentLanguage]['experience.job1.title'] = formData.job1Title;
    translations[currentLanguage]['experience.job1.company'] = formData.job1Company;
    translations[currentLanguage]['experience.job1.period'] = formData.job1Period;
    translations[currentLanguage]['experience.job1.description'] = formData.job1Description;
    translations[currentLanguage]['experience.job2.title'] = formData.job2Title;
    translations[currentLanguage]['experience.job2.company'] = formData.job2Company;
    translations[currentLanguage]['experience.job2.period'] = formData.job2Period;
    translations[currentLanguage]['experience.job2.description'] = formData.job2Description;
    
    translations[currentLanguage]['skills.strategy.title'] = formData.skillsStrategyTitle;
    translations[currentLanguage]['skills.leadership.title'] = formData.skillsLeadershipTitle;
    translations[currentLanguage]['skills.tech.title'] = formData.skillsTechTitle;
    
    translations[currentLanguage]['portfolio.project1.title'] = formData.project1Title;
    translations[currentLanguage]['portfolio.project1.desc'] = formData.project1Desc;
    translations[currentLanguage]['portfolio.project2.title'] = formData.project2Title;
    translations[currentLanguage]['portfolio.project2.desc'] = formData.project2Desc;
    translations[currentLanguage]['portfolio.project3.title'] = formData.project3Title;
    translations[currentLanguage]['portfolio.project3.desc'] = formData.project3Desc;

    // Auto-translate to other languages
    autoTranslate(formData);

    // Apply changes to current view
    applyLanguage(currentLanguage);
    
    // Update skills items dynamically
    updateSkillsItems(formData);

    // Save to localStorage
    saveData();

    // Close modal
    closeModal('editModal');

    alert('Dados atualizados com sucesso!');
}

function updateSkillsItems(formData) {
    // Update strategy skills
    const strategyItems = formData.skillsStrategyItems.split(',').map(item => item.trim()).filter(item => item);
    const strategyContainer = document.querySelector('.skill-category:nth-child(1) .skill-items');
    if (strategyContainer) {
        strategyContainer.innerHTML = strategyItems.map(item => `<span class="skill-tag">${item}</span>`).join('');
    }
    
    // Update leadership skills
    const leadershipItems = formData.skillsLeadershipItems.split(',').map(item => item.trim()).filter(item => item);
    const leadershipContainer = document.querySelector('.skill-category:nth-child(2) .skill-items');
    if (leadershipContainer) {
        leadershipContainer.innerHTML = leadershipItems.map(item => `<span class="skill-tag">${item}</span>`).join('');
    }
    
    // Update tech skills
    const techItems = formData.skillsTechItems.split(',').map(item => item.trim()).filter(item => item);
    const techContainer = document.querySelector('.skill-category:nth-child(3) .skill-items');
    if (techContainer) {
        techContainer.innerHTML = techItems.map(item => `<span class="skill-tag">${item}</span>`).join('');
    }
}

function autoTranslate(data) {
    // Simple translation mapping for common terms
    const translationMap = {
        'CEO & Fundador': { en: 'CEO & Founder', es: 'CEO y Fundador' },
        'Estrategista de Negócios Globais': { en: 'Global Business Strategist', es: 'Estratega de Negocios Globales' },
        'Desenvolvimento Empresarial': { en: 'Business Development', es: 'Desarrollo Empresarial' },
        'FBD Global Business Strategy': { en: 'FBD Global Business Strategy', es: 'FBD Global Business Strategy' },
        'Diretor de Estratégia': { en: 'Strategy Director', es: 'Director de Estrategia' },
        'Empresa Multinacional': { en: 'Multinational Company', es: 'Empresa Multinacional' }
    };

    // Update other languages with translated content
    Object.keys(translations).forEach(lang => {
        if (lang !== currentLanguage) {
            // Update name (usually doesn't need translation)
            translations[lang]['hero.name'] = data.name;
            
            // Update title with translation if available
            if (translationMap[data.title] && translationMap[data.title][lang]) {
                translations[lang]['hero.title'] = translationMap[data.title][lang];
            } else {
                translations[lang]['hero.title'] = data.title; // Fallback to original
            }
            
            // For description and about texts, we'll use a simple approach
            // In a real application, you'd use a translation API
            translations[lang]['hero.description'] = data.description;
            translations[lang]['about.text1'] = data.about1;
            translations[lang]['about.text2'] = data.about2;
        }
    });
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function saveData() {
    const dataToSave = {
        translations: translations,
        currentLanguage: currentLanguage,
        isAdmin: isAdmin
    };
    localStorage.setItem('cvData', JSON.stringify(dataToSave));
}

function loadSavedData() {
    const savedData = localStorage.getItem('cvData');
    if (savedData) {
        const data = JSON.parse(savedData);
        if (data.translations) {
            Object.assign(translations, data.translations);
        }
        if (data.currentLanguage) {
            currentLanguage = data.currentLanguage;
        }
        if (data.isAdmin) {
            isAdmin = data.isAdmin;
            showEditButton();
        }
    }
}

function checkAdminSession() {
    // Check if admin session is still valid (simple timeout)
    const adminTime = localStorage.getItem('adminTime');
    if (adminTime) {
        const now = new Date().getTime();
        const adminTimeNum = parseInt(adminTime);
        const hoursDiff = (now - adminTimeNum) / (1000 * 60 * 60);
        
        if (hoursDiff < 24) { // Admin session valid for 24 hours
            isAdmin = true;
            showEditButton();
            hideAdminLoginButton();
        } else {
            localStorage.removeItem('adminTime');
        }
    }
}

// Save admin time when login is successful
function saveAdminTime() {
    localStorage.setItem('adminTime', new Date().getTime().toString());
}

// Update admin login to save time
document.addEventListener('DOMContentLoaded', function() {
    const adminForm = document.getElementById('adminForm');
    adminForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const password = document.getElementById('adminPassword').value;
        if (password === 'admin123') {
            isAdmin = true;
            saveAdminTime();
            showEditButton();
            closeModal('adminModal');
            alert('Login realizado com sucesso!');
        } else {
            alert('Senha incorreta!');
        }
    });
});

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
