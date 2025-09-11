// Script simplificado para debug
console.log('=== SCRIPT SIMPLE LOADED ===');

// Verificar se os dados estão disponíveis
if (typeof EMBEDDED_CV_DATA !== 'undefined') {
    console.log('✅ EMBEDDED_CV_DATA carregado!');
    console.log('Chaves disponíveis:', Object.keys(EMBEDDED_CV_DATA));
    
    // Carregar dados em português
    const cvData = EMBEDDED_CV_DATA['pt'];
    console.log('✅ Dados em português carregados!');
    console.log('Experiências:', cvData.experience.length);
    console.log('Habilidades:', cvData.skills.length);
    console.log('Portfólio:', cvData.portfolio.length);
    
    // Atualizar seções
    updateExperience(cvData.experience);
    updateSkills(cvData.skills);
    updatePortfolio(cvData.portfolio);
    
} else {
    console.error('❌ EMBEDDED_CV_DATA não carregado!');
}

function updateExperience(experiences) {
    console.log('=== ATUALIZANDO EXPERIÊNCIA ===');
    const container = document.querySelector('.timeline');
    if (container) {
        console.log('✅ Container timeline encontrado');
        container.innerHTML = '';
        
        experiences.forEach((exp, index) => {
            console.log(`Adicionando experiência ${index + 1}: ${exp.title}`);
            const item = document.createElement('div');
            item.className = 'timeline-item';
            item.innerHTML = `
                <div class="timeline-content">
                    <h3>${exp.title}</h3>
                    <h4>${exp.company}</h4>
                    <span class="date">${exp.period}</span>
                    <p>${exp.description}</p>
                </div>
            `;
            container.appendChild(item);
        });
        
        console.log(`✅ ${experiences.length} experiências adicionadas`);
    } else {
        console.error('❌ Container timeline não encontrado');
    }
}

function updateSkills(skills) {
    console.log('=== ATUALIZANDO HABILIDADES ===');
    const container = document.querySelector('.skills-grid');
    if (container) {
        console.log('✅ Container skills encontrado');
        container.innerHTML = '';
        
        skills.forEach((skill, index) => {
            console.log(`Adicionando habilidade ${index + 1}: ${skill.category_title}`);
            const item = document.createElement('div');
            item.className = 'skill-category';
            
            const skillsList = skill.skills_list.split(',').map(s => s.trim());
            
            item.innerHTML = `
                <h3>${skill.category_title}</h3>
                <div class="skill-items">
                    ${skillsList.map(s => `<span class="skill-tag">${s}</span>`).join('')}
                </div>
            `;
            container.appendChild(item);
        });
        
        console.log(`✅ ${skills.length} categorias de habilidades adicionadas`);
    } else {
        console.error('❌ Container skills não encontrado');
    }
}

function updatePortfolio(portfolio) {
    console.log('=== ATUALIZANDO PORTFÓLIO ===');
    const container = document.querySelector('.portfolio-grid');
    if (container) {
        console.log('✅ Container portfolio encontrado');
        container.innerHTML = '';
        
        portfolio.forEach((project, index) => {
            console.log(`Adicionando projeto ${index + 1}: ${project.title}`);
            const item = document.createElement('div');
            item.className = 'portfolio-item';
            item.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            `;
            container.appendChild(item);
        });
        
        console.log(`✅ ${portfolio.length} projetos adicionados`);
    } else {
        console.error('❌ Container portfolio não encontrado');
    }
}

// Botão editar
document.addEventListener('DOMContentLoaded', function() {
    console.log('=== DOM LOADED - SCRIPT SIMPLE ===');
    
    const editBtn = document.getElementById('editModeBtn');
    if (editBtn) {
        editBtn.onclick = function(e) {
            e.preventDefault();
            console.log('✅ Botão editar clicado!');
            const modal = document.getElementById('editModal');
            if (modal) {
                modal.style.display = 'block';
                console.log('✅ Modal aberto!');
            } else {
                console.error('❌ Modal não encontrado!');
            }
        };
        console.log('✅ Event listener do botão editar adicionado');
    } else {
        console.error('❌ Botão editar não encontrado!');
    }
});
