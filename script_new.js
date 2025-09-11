// Global variables
let currentLanguage = 'en'; // Padrão em inglês
let cvData = {};
const API_BASE_URL = 'api/';

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
            loadCVData();
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
}

// API Functions
async function loadCVData() {
    try {
        const response = await fetch(`${API_BASE_URL}index.php?action=get_data&lang=${currentLanguage}`);
        const result = await response.json();
        
        if (result.success) {
            cvData = result.data;
            updatePageContent();
            applyInterfaceTranslations();
        } else {
            console.error('Failed to load CV data:', result.error);
            alert('Erro ao carregar dados do CV');
        }
    } catch (error) {
        console.error('Error loading CV data:', error);
        alert('Erro de conexão ao carregar dados do CV');
    }
}

async function saveCVData(data) {
    try {
        const response = await fetch(`${API_BASE_URL}index.php?action=update_data`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: 'fabio',
                password: '1407',
                language: currentLanguage,
                data: data
            })
        });
        
        const result = await response.json();
        
        if (result.success) {
            alert('Dados salvos com sucesso!');
            loadCVData(); // Reload data to show translations
        } else {
            console.error('Failed to save CV data:', result.error);
            alert('Erro ao salvar dados: ' + result.error);
        }
    } catch (error) {
        console.error('Error saving CV data:', error);
        alert('Erro de conexão ao salvar dados');
    }
}

// Update page content with CV data
function updatePageContent() {
    if (!cvData) return;

    // Hero section
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

    // Experience section
    updateElement('.timeline-item:nth-child(1) h3', cvData.experience?.job1_title);
    updateElement('.timeline-item:nth-child(1) h4', cvData.experience?.job1_company);
    updateElement('.timeline-item:nth-child(1) .date', cvData.experience?.job1_period);
    updateElement('.timeline-item:nth-child(1) p', cvData.experience?.job1_description);
    updateElement('.timeline-item:nth-child(2) h3', cvData.experience?.job2_title);
    updateElement('.timeline-item:nth-child(2) h4', cvData.experience?.job2_company);
    updateElement('.timeline-item:nth-child(2) .date', cvData.experience?.job2_period);
    updateElement('.timeline-item:nth-child(2) p', cvData.experience?.job2_description);

    // Skills section
    updateElement('.skill-category:nth-child(1) h3', cvData.skills?.strategy_title);
    updateElement('.skill-category:nth-child(2) h3', cvData.skills?.leadership_title);
    updateElement('.skill-category:nth-child(3) h3', cvData.skills?.tech_title);
    
    // Update skills items
    updateSkillsItems('.skill-category:nth-child(1) .skill-items', cvData.skills?.strategy_items);
    updateSkillsItems('.skill-category:nth-child(2) .skill-items', cvData.skills?.leadership_items);
    updateSkillsItems('.skill-category:nth-child(3) .skill-items', cvData.skills?.tech_items);

    // Portfolio section
    updateElement('.portfolio-item:nth-child(1) h3', cvData.portfolio?.project1_title);
    updateElement('.portfolio-item:nth-child(1) p', cvData.portfolio?.project1_desc);
    updateElement('.portfolio-item:nth-child(2) h3', cvData.portfolio?.project2_title);
    updateElement('.portfolio-item:nth-child(2) p', cvData.portfolio?.project2_desc);
    updateElement('.portfolio-item:nth-child(3) h3', cvData.portfolio?.project3_title);
    updateElement('.portfolio-item:nth-child(3) p', cvData.portfolio?.project3_desc);

    // Contact section
    updateElement('.contact-item:nth-child(1) span', cvData.contact?.email);
    updateElement('.contact-item:nth-child(2) span', cvData.contact?.phone);
    updateElement('.contact-item:nth-child(3) span', cvData.contact?.location);

    // Cards section
    updateElement('.card:nth-child(1) h3', cvData.cards?.innovation_title);
    updateElement('.card:nth-child(1) p', cvData.cards?.innovation_desc);
    updateElement('.card:nth-child(2) h3', cvData.cards?.leadership_title);
    updateElement('.card:nth-child(2) p', cvData.cards?.leadership_desc);
    updateElement('.card:nth-child(3) h3', cvData.cards?.results_title);
    updateElement('.card:nth-child(3) p', cvData.cards?.results_desc);
}

function updateElement(selector, content) {
    const element = document.querySelector(selector);
    if (element && content) {
        element.textContent = content;
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
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (interfaceTranslations[currentLanguage] && interfaceTranslations[currentLanguage][key]) {
            element.textContent = interfaceTranslations[currentLanguage][key];
        }
    });
    
    // Update language selector
    document.getElementById('languageSelect').value = currentLanguage;
}

// Modal functions
function openEditModal() {
    loadCurrentDataToEdit();
    openModal('editModal');
}

function loadCurrentDataToEdit() {
    if (!cvData) return;

    // Hero section
    document.getElementById('editName').value = cvData.hero?.name || '';
    document.getElementById('editTitle').value = cvData.hero?.title || '';
    document.getElementById('editDescription').value = cvData.hero?.description || '';
    
    // About section
    document.getElementById('editAbout1').value = cvData.about?.text1 || '';
    document.getElementById('editAbout2').value = cvData.about?.text2 || '';
    document.getElementById('editStatsProjects').value = cvData.about?.stats_projects || '';
    document.getElementById('editStatsCountries').value = cvData.about?.stats_countries || '';
    document.getElementById('editStatsYears').value = cvData.about?.stats_years || '';
    
    // Experience section
    document.getElementById('editJob1Title').value = cvData.experience?.job1_title || '';
    document.getElementById('editJob1Company').value = cvData.experience?.job1_company || '';
    document.getElementById('editJob1Period').value = cvData.experience?.job1_period || '';
    document.getElementById('editJob1Description').value = cvData.experience?.job1_description || '';
    document.getElementById('editJob2Title').value = cvData.experience?.job2_title || '';
    document.getElementById('editJob2Company').value = cvData.experience?.job2_company || '';
    document.getElementById('editJob2Period').value = cvData.experience?.job2_period || '';
    document.getElementById('editJob2Description').value = cvData.experience?.job2_description || '';
    
    // Skills section
    document.getElementById('editSkillsStrategyTitle').value = cvData.skills?.strategy_title || '';
    document.getElementById('editSkillsStrategyItems').value = cvData.skills?.strategy_items || '';
    document.getElementById('editSkillsLeadershipTitle').value = cvData.skills?.leadership_title || '';
    document.getElementById('editSkillsLeadershipItems').value = cvData.skills?.leadership_items || '';
    document.getElementById('editSkillsTechTitle').value = cvData.skills?.tech_title || '';
    document.getElementById('editSkillsTechItems').value = cvData.skills?.tech_items || '';
    
    // Portfolio section
    document.getElementById('editProject1Title').value = cvData.portfolio?.project1_title || '';
    document.getElementById('editProject1Desc').value = cvData.portfolio?.project1_desc || '';
    document.getElementById('editProject2Title').value = cvData.portfolio?.project2_title || '';
    document.getElementById('editProject2Desc').value = cvData.portfolio?.project2_desc || '';
    document.getElementById('editProject3Title').value = cvData.portfolio?.project3_title || '';
    document.getElementById('editProject3Desc').value = cvData.portfolio?.project3_desc || '';
    
    // Contact section
    document.getElementById('editContactEmail').value = cvData.contact?.email || '';
    document.getElementById('editContactPhone').value = cvData.contact?.phone || '';
    document.getElementById('editContactLocation').value = cvData.contact?.location || '';
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
        experience: {
            job1_title: document.getElementById('editJob1Title').value,
            job1_company: document.getElementById('editJob1Company').value,
            job1_period: document.getElementById('editJob1Period').value,
            job1_description: document.getElementById('editJob1Description').value,
            job2_title: document.getElementById('editJob2Title').value,
            job2_company: document.getElementById('editJob2Company').value,
            job2_period: document.getElementById('editJob2Period').value,
            job2_description: document.getElementById('editJob2Description').value
        },
        skills: {
            strategy_title: document.getElementById('editSkillsStrategyTitle').value,
            strategy_items: document.getElementById('editSkillsStrategyItems').value,
            leadership_title: document.getElementById('editSkillsLeadershipTitle').value,
            leadership_items: document.getElementById('editSkillsLeadershipItems').value,
            tech_title: document.getElementById('editSkillsTechTitle').value,
            tech_items: document.getElementById('editSkillsTechItems').value
        },
        portfolio: {
            project1_title: document.getElementById('editProject1Title').value,
            project1_desc: document.getElementById('editProject1Desc').value,
            project2_title: document.getElementById('editProject2Title').value,
            project2_desc: document.getElementById('editProject2Desc').value,
            project3_title: document.getElementById('editProject3Title').value,
            project3_desc: document.getElementById('editProject3Desc').value
        },
        contact: {
            email: document.getElementById('editContactEmail').value,
            phone: document.getElementById('editContactPhone').value,
            location: document.getElementById('editContactLocation').value
        }
    };

    saveCVData(formData);
    closeModal('editModal');
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
