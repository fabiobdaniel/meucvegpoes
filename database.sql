-- Base de dados para CV Multilíngue
CREATE DATABASE IF NOT EXISTS cv_multilingual;
USE cv_multilingual;

-- Tabela para dados do CV em diferentes idiomas
CREATE TABLE cv_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    section VARCHAR(50) NOT NULL,
    field_key VARCHAR(100) NOT NULL,
    language_code VARCHAR(5) NOT NULL,
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY unique_section_field_lang (section, field_key, language_code)
);

-- Inserir dados padrão em português
INSERT INTO cv_data (section, field_key, language_code, content) VALUES
-- Hero Section
('hero', 'name', 'pt', 'Fabio Bittencourt Daniel'),
('hero', 'title', 'pt', 'Estrategista de Negócios Globais & Desenvolvimento Empresarial'),
('hero', 'description', 'pt', 'Ao longo da minha trajetória em Estratégia de Negócios Globais, desenvolvi habilidades essenciais para liderar transformações empresariais, construir parcerias estratégicas e entender as necessidades do mercado internacional. Agora, trago essa experiência para a área de Desenvolvimento Empresarial, onde sigo focada em proporcionar soluções de alto valor, fortalecer conexões globais e impulsionar o crescimento e inovação.'),

-- About Section
('about', 'text1', 'pt', 'Profissional experiente em estratégias de negócios globais com mais de 10 anos de experiência no mercado internacional.'),
('about', 'text2', 'pt', 'Especializado em desenvolvimento de estratégias de expansão, análise de mercados emergentes e implementação de soluções inovadoras para empresas multinacionais.'),
('about', 'stats_projects', 'pt', '+50'),
('about', 'stats_projects_label', 'pt', 'Projetos Concluídos'),
('about', 'stats_countries', 'pt', '+20'),
('about', 'stats_countries_label', 'pt', 'Países Atendidos'),
('about', 'stats_years', 'pt', '10+'),
('about', 'stats_years_label', 'pt', 'Anos de Experiência'),

-- Experience Section
('experience', 'job1_title', 'pt', 'CEO & Fundador'),
('experience', 'job1_company', 'pt', 'FBD Global Business Strategy'),
('experience', 'job1_period', 'pt', '2020 - Presente'),
('experience', 'job1_description', 'pt', 'Liderança estratégica da empresa, desenvolvimento de parcerias internacionais e implementação de soluções inovadoras para clientes globais.'),
('experience', 'job2_title', 'pt', 'Diretor de Estratégia'),
('experience', 'job2_company', 'pt', 'Empresa Multinacional'),
('experience', 'job2_period', 'pt', '2018 - 2020'),
('experience', 'job2_description', 'pt', 'Desenvolvimento e implementação de estratégias de expansão internacional, análise de mercados e gestão de equipes multiculturais.'),

-- Skills Section
('skills', 'strategy_title', 'pt', 'Estratégia de Negócios'),
('skills', 'strategy_items', 'pt', 'Análise de Mercado,Planejamento Estratégico,Desenvolvimento de Negócios'),
('skills', 'leadership_title', 'pt', 'Liderança'),
('skills', 'leadership_items', 'pt', 'Gestão de Equipes,Comunicação Intercultural,Tomada de Decisão'),
('skills', 'tech_title', 'pt', 'Tecnologia'),
('skills', 'tech_items', 'pt', 'Análise de Dados,Ferramentas de Gestão,Inovação Digital'),

-- Portfolio Section
('portfolio', 'project1_title', 'pt', 'Expansão Internacional'),
('portfolio', 'project1_desc', 'pt', 'Estratégia de entrada em 15 novos mercados'),
('portfolio', 'project2_title', 'pt', 'Parcerias Estratégicas'),
('portfolio', 'project2_desc', 'pt', 'Desenvolvimento de alianças globais'),
('portfolio', 'project3_title', 'pt', 'Crescimento de Receita'),
('portfolio', 'project3_desc', 'pt', 'Aumento de 300% em 3 anos'),

-- Contact Section
('contact', 'email', 'pt', 'fabio@fbdglobal.com'),
('contact', 'phone', 'pt', '+55 (11) 99999-9999'),
('contact', 'location', 'pt', 'São Paulo, Brasil'),

-- Cards Section
('cards', 'innovation_title', 'pt', 'Inovação'),
('cards', 'innovation_desc', 'pt', 'Sempre à frente das tendências'),
('cards', 'leadership_title', 'pt', 'Liderança'),
('cards', 'leadership_desc', 'pt', 'Gestão de equipes de alta performance'),
('cards', 'results_title', 'pt', 'Resultados'),
('cards', 'results_desc', 'pt', 'Foco em entregas de valor');

-- Inserir dados em inglês
INSERT INTO cv_data (section, field_key, language_code, content) VALUES
-- Hero Section
('hero', 'name', 'en', 'Fabio Bittencourt Daniel'),
('hero', 'title', 'en', 'Global Business Strategist & Business Development'),
('hero', 'description', 'en', 'Throughout my career in Global Business Strategy, I have developed essential skills to lead business transformations, build strategic partnerships and understand the needs of the international market. Now, I bring this experience to the Business Development area, where I remain focused on providing high-value solutions, strengthening global connections and driving growth and innovation.'),

-- About Section
('about', 'text1', 'en', 'Experienced professional in global business strategies with more than 10 years of experience in the international market.'),
('about', 'text2', 'en', 'Specialized in developing expansion strategies, analyzing emerging markets and implementing innovative solutions for multinational companies.'),
('about', 'stats_projects', 'en', '+50'),
('about', 'stats_projects_label', 'en', 'Completed Projects'),
('about', 'stats_countries', 'en', '+20'),
('about', 'stats_countries_label', 'en', 'Countries Served'),
('about', 'stats_years', 'en', '10+'),
('about', 'stats_years_label', 'en', 'Years of Experience'),

-- Experience Section
('experience', 'job1_title', 'en', 'CEO & Founder'),
('experience', 'job1_company', 'en', 'FBD Global Business Strategy'),
('experience', 'job1_period', 'en', '2020 - Present'),
('experience', 'job1_description', 'en', 'Strategic leadership of the company, development of international partnerships and implementation of innovative solutions for global clients.'),
('experience', 'job2_title', 'en', 'Strategy Director'),
('experience', 'job2_company', 'en', 'Multinational Company'),
('experience', 'job2_period', 'en', '2018 - 2020'),
('experience', 'job2_description', 'en', 'Development and implementation of international expansion strategies, market analysis and management of multicultural teams.'),

-- Skills Section
('skills', 'strategy_title', 'en', 'Business Strategy'),
('skills', 'strategy_items', 'en', 'Market Analysis,Strategic Planning,Business Development'),
('skills', 'leadership_title', 'en', 'Leadership'),
('skills', 'leadership_items', 'en', 'Team Management,Cross-cultural Communication,Decision Making'),
('skills', 'tech_title', 'en', 'Technology'),
('skills', 'tech_items', 'en', 'Data Analysis,Management Tools,Digital Innovation'),

-- Portfolio Section
('portfolio', 'project1_title', 'en', 'International Expansion'),
('portfolio', 'project1_desc', 'en', 'Entry strategy into 15 new markets'),
('portfolio', 'project2_title', 'en', 'Strategic Partnerships'),
('portfolio', 'project2_desc', 'en', 'Development of global alliances'),
('portfolio', 'project3_title', 'en', 'Revenue Growth'),
('portfolio', 'project3_desc', 'en', '300% increase in 3 years'),

-- Contact Section
('contact', 'email', 'en', 'fabio@fbdglobal.com'),
('contact', 'phone', 'en', '+55 (11) 99999-9999'),
('contact', 'location', 'en', 'São Paulo, Brazil'),

-- Cards Section
('cards', 'innovation_title', 'en', 'Innovation'),
('cards', 'innovation_desc', 'en', 'Always ahead of trends'),
('cards', 'leadership_title', 'en', 'Leadership'),
('cards', 'leadership_desc', 'en', 'High-performance team management'),
('cards', 'results_title', 'en', 'Results'),
('cards', 'results_desc', 'en', 'Focus on value delivery');

-- Inserir dados em espanhol
INSERT INTO cv_data (section, field_key, language_code, content) VALUES
-- Hero Section
('hero', 'name', 'es', 'Fabio Bittencourt Daniel'),
('hero', 'title', 'es', 'Estratega de Negocios Globales y Desarrollo Empresarial'),
('hero', 'description', 'es', 'A lo largo de mi trayectoria en Estrategia de Negocios Globales, he desarrollado habilidades esenciales para liderar transformaciones empresariales, construir alianzas estratégicas y entender las necesidades del mercado internacional. Ahora, trago esta experiencia al área de Desarrollo Empresarial, donde sigo enfocado en proporcionar soluciones de alto valor, fortalecer conexiones globales e impulsar el crecimiento y la innovación.'),

-- About Section
('about', 'text1', 'es', 'Profesional experimentado en estrategias de negocios globales con más de 10 años de experiencia en el mercado internacional.'),
('about', 'text2', 'es', 'Especializado en el desarrollo de estrategias de expansión, análisis de mercados emergentes e implementación de soluciones innovadoras para empresas multinacionales.'),
('about', 'stats_projects', 'es', '+50'),
('about', 'stats_projects_label', 'es', 'Proyectos Completados'),
('about', 'stats_countries', 'es', '+20'),
('about', 'stats_countries_label', 'es', 'Países Atendidos'),
('about', 'stats_years', 'es', '10+'),
('about', 'stats_years_label', 'es', 'Años de Experiencia'),

-- Experience Section
('experience', 'job1_title', 'es', 'CEO y Fundador'),
('experience', 'job1_company', 'es', 'FBD Global Business Strategy'),
('experience', 'job1_period', 'es', '2020 - Presente'),
('experience', 'job1_description', 'es', 'Liderazgo estratégico de la empresa, desarrollo de alianzas internacionales e implementación de soluciones innovadoras para clientes globales.'),
('experience', 'job2_title', 'es', 'Director de Estrategia'),
('experience', 'job2_company', 'es', 'Empresa Multinacional'),
('experience', 'job2_period', 'es', '2018 - 2020'),
('experience', 'job2_description', 'es', 'Desarrollo e implementación de estrategias de expansión internacional, análisis de mercados y gestión de equipos multiculturales.'),

-- Skills Section
('skills', 'strategy_title', 'es', 'Estrategia de Negocios'),
('skills', 'strategy_items', 'es', 'Análisis de Mercado,Planificación Estratégica,Desarrollo de Negocios'),
('skills', 'leadership_title', 'es', 'Liderazgo'),
('skills', 'leadership_items', 'es', 'Gestión de Equipos,Comunicación Intercultural,Toma de Decisiones'),
('skills', 'tech_title', 'es', 'Tecnología'),
('skills', 'tech_items', 'es', 'Análisis de Datos,Herramientas de Gestión,Innovación Digital'),

-- Portfolio Section
('portfolio', 'project1_title', 'es', 'Expansión Internacional'),
('portfolio', 'project1_desc', 'es', 'Estrategia de entrada en 15 nuevos mercados'),
('portfolio', 'project2_title', 'es', 'Alianzas Estratégicas'),
('portfolio', 'project2_desc', 'es', 'Desarrollo de alianzas globales'),
('portfolio', 'project3_title', 'es', 'Crecimiento de Ingresos'),
('portfolio', 'project3_desc', 'es', 'Aumento del 300% en 3 años'),

-- Contact Section
('contact', 'email', 'es', 'fabio@fbdglobal.com'),
('contact', 'phone', 'es', '+55 (11) 99999-9999'),
('contact', 'location', 'es', 'São Paulo, Brasil'),

-- Cards Section
('cards', 'innovation_title', 'es', 'Innovación'),
('cards', 'innovation_desc', 'es', 'Siempre a la vanguardia de las tendencias'),
('cards', 'leadership_title', 'es', 'Liderazgo'),
('cards', 'leadership_desc', 'es', 'Gestión de equipos de alto rendimiento'),
('cards', 'results_title', 'es', 'Resultados'),
('cards', 'results_desc', 'es', 'Enfoque en la entrega de valor');
