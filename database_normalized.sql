-- Base de dados normalizada para CV multilíngue
CREATE DATABASE IF NOT EXISTS cv_multilingual_normalized;
USE cv_multilingual_normalized;

-- Tabela de idiomas
CREATE TABLE IF NOT EXISTS languages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(5) NOT NULL UNIQUE,
    name VARCHAR(50) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE
);

-- Inserir idiomas suportados
INSERT INTO languages (code, name) VALUES 
('en', 'English'),
('pt', 'Português'),
('es', 'Español');

-- Tabela de seções
CREATE TABLE IF NOT EXISTS sections (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE
);

-- Inserir seções
INSERT INTO sections (name, display_order) VALUES 
('hero', 1),
('about', 2),
('experience', 3),
('skills', 4),
('portfolio', 5),
('contact', 6),
('cards', 7);

-- Tabela de campos por seção
CREATE TABLE IF NOT EXISTS section_fields (
    id INT AUTO_INCREMENT PRIMARY KEY,
    section_id INT NOT NULL,
    field_name VARCHAR(50) NOT NULL,
    field_type ENUM('text', 'textarea', 'number', 'email', 'phone', 'date', 'array') DEFAULT 'text',
    is_required BOOLEAN DEFAULT FALSE,
    display_order INT DEFAULT 0,
    FOREIGN KEY (section_id) REFERENCES sections(id) ON DELETE CASCADE
);

-- Inserir campos para cada seção
-- Hero section
INSERT INTO section_fields (section_id, field_name, field_type, is_required, display_order) VALUES 
(1, 'name', 'text', TRUE, 1),
(1, 'title', 'text', TRUE, 2),
(1, 'description', 'textarea', TRUE, 3);

-- About section
INSERT INTO section_fields (section_id, field_name, field_type, is_required, display_order) VALUES 
(2, 'text1', 'textarea', TRUE, 1),
(2, 'text2', 'textarea', TRUE, 2),
(2, 'stats_projects', 'text', FALSE, 3),
(2, 'stats_projects_label', 'text', FALSE, 4),
(2, 'stats_countries', 'text', FALSE, 5),
(2, 'stats_countries_label', 'text', FALSE, 6),
(2, 'stats_years', 'text', FALSE, 7),
(2, 'stats_years_label', 'text', FALSE, 8);

-- Experience section (múltiplos registros)
INSERT INTO section_fields (section_id, field_name, field_type, is_required, display_order) VALUES 
(3, 'title', 'text', TRUE, 1),
(3, 'company', 'text', TRUE, 2),
(3, 'period', 'text', TRUE, 3),
(3, 'description', 'textarea', TRUE, 4),
(3, 'order_index', 'number', FALSE, 5);

-- Skills section (múltiplos registros)
INSERT INTO section_fields (section_id, field_name, field_type, is_required, display_order) VALUES 
(4, 'category_title', 'text', TRUE, 1),
(4, 'skills_list', 'array', TRUE, 2),
(4, 'order_index', 'number', FALSE, 3);

-- Portfolio section (múltiplos registros)
INSERT INTO section_fields (section_id, field_name, field_type, is_required, display_order) VALUES 
(5, 'title', 'text', TRUE, 1),
(5, 'description', 'textarea', TRUE, 2),
(5, 'order_index', 'number', FALSE, 3);

-- Contact section
INSERT INTO section_fields (section_id, field_name, field_type, is_required, display_order) VALUES 
(6, 'email', 'email', TRUE, 1),
(6, 'phone', 'phone', TRUE, 2),
(6, 'location', 'text', TRUE, 3);

-- Cards section (múltiplos registros)
INSERT INTO section_fields (section_id, field_name, field_type, is_required, display_order) VALUES 
(7, 'title', 'text', TRUE, 1),
(7, 'description', 'textarea', TRUE, 2),
(7, 'order_index', 'number', FALSE, 3);

-- Tabela principal de dados do CV
CREATE TABLE IF NOT EXISTS cv_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    section_id INT NOT NULL,
    language_id INT NOT NULL,
    record_index INT DEFAULT 0, -- Para múltiplos registros da mesma seção
    field_name VARCHAR(50) NOT NULL,
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (section_id) REFERENCES sections(id) ON DELETE CASCADE,
    FOREIGN KEY (language_id) REFERENCES languages(id) ON DELETE CASCADE,
    UNIQUE KEY unique_section_lang_record_field (section_id, language_id, record_index, field_name)
);

-- Inserir dados iniciais em inglês
-- Hero data
INSERT INTO cv_data (section_id, language_id, record_index, field_name, content) VALUES 
(1, 1, 0, 'name', 'Fabio Bittencourt Daniel'),
(1, 1, 0, 'title', 'Global Business Strategist & Business Development'),
(1, 1, 0, 'description', 'Throughout my career in Global Business Strategy, I have developed essential skills to lead business transformations, build strategic partnerships and understand the needs of the international market. Now, I bring this experience to the Business Development area, where I remain focused on providing high-value solutions, strengthening global connections and driving growth and innovation.');

-- About data
INSERT INTO cv_data (section_id, language_id, record_index, field_name, content) VALUES 
(2, 1, 0, 'text1', 'Experienced professional in global business strategies with more than 10 years of experience in the international market.'),
(2, 1, 0, 'text2', 'Specialized in developing expansion strategies, analyzing emerging markets and implementing innovative solutions for multinational companies.'),
(2, 1, 0, 'stats_projects', '+50'),
(2, 1, 0, 'stats_projects_label', 'Completed Projects'),
(2, 1, 0, 'stats_countries', '+20'),
(2, 1, 0, 'stats_countries_label', 'Countries Served'),
(2, 1, 0, 'stats_years', '10+'),
(2, 1, 0, 'stats_years_label', 'Years of Experience');

-- Experience data (múltiplos registros)
INSERT INTO cv_data (section_id, language_id, record_index, field_name, content) VALUES 
(3, 1, 0, 'title', 'CEO & Founder'),
(3, 1, 0, 'company', 'FBD Global Business Strategy'),
(3, 1, 0, 'period', '2020 - Present'),
(3, 1, 0, 'description', 'Strategic leadership of the company, development of international partnerships and implementation of innovative solutions for global clients.'),
(3, 1, 0, 'order_index', '1'),
(3, 1, 1, 'title', 'Strategy Director'),
(3, 1, 1, 'company', 'Multinational Company'),
(3, 1, 1, 'period', '2018 - 2020'),
(3, 1, 1, 'description', 'Development and implementation of international expansion strategies, market analysis and management of multicultural teams.'),
(3, 1, 1, 'order_index', '2');

-- Skills data (múltiplos registros)
INSERT INTO cv_data (section_id, language_id, record_index, field_name, content) VALUES 
(4, 1, 0, 'category_title', 'Business Strategy'),
(4, 1, 0, 'skills_list', 'Market Analysis,Strategic Planning,Business Development'),
(4, 1, 0, 'order_index', '1'),
(4, 1, 1, 'category_title', 'Leadership'),
(4, 1, 1, 'skills_list', 'Team Management,Cross-cultural Communication,Decision Making'),
(4, 1, 1, 'order_index', '2'),
(4, 1, 2, 'category_title', 'Technology'),
(4, 1, 2, 'skills_list', 'Data Analysis,Management Tools,Digital Innovation'),
(4, 1, 2, 'order_index', '3');

-- Portfolio data (múltiplos registros)
INSERT INTO cv_data (section_id, language_id, record_index, field_name, content) VALUES 
(5, 1, 0, 'title', 'International Expansion'),
(5, 1, 0, 'description', 'Entry strategy into 15 new markets'),
(5, 1, 0, 'order_index', '1'),
(5, 1, 1, 'title', 'Strategic Partnerships'),
(5, 1, 1, 'description', 'Development of global alliances'),
(5, 1, 1, 'order_index', '2'),
(5, 1, 2, 'title', 'Revenue Growth'),
(5, 1, 2, 'description', '300% increase in 3 years'),
(5, 1, 2, 'order_index', '3');

-- Contact data
INSERT INTO cv_data (section_id, language_id, record_index, field_name, content) VALUES 
(6, 1, 0, 'email', 'fabio@fbdglobal.com'),
(6, 1, 0, 'phone', '+1 (555) 123-4567'),
(6, 1, 0, 'location', 'Miami, FL, USA');

-- Cards data (múltiplos registros)
INSERT INTO cv_data (section_id, language_id, record_index, field_name, content) VALUES 
(7, 1, 0, 'title', 'Innovation'),
(7, 1, 0, 'description', 'Always ahead of trends'),
(7, 1, 0, 'order_index', '1'),
(7, 1, 1, 'title', 'Leadership'),
(7, 1, 1, 'description', 'High-performance team management'),
(7, 1, 1, 'order_index', '2'),
(7, 1, 2, 'title', 'Results'),
(7, 1, 2, 'description', 'Focus on value delivery'),
(7, 1, 2, 'order_index', '3');

-- Inserir dados em português
-- Hero data PT
INSERT INTO cv_data (section_id, language_id, record_index, field_name, content) VALUES 
(1, 2, 0, 'name', 'Fabio Bittencourt Daniel'),
(1, 2, 0, 'title', 'Estrategista de Negócios Globais & Desenvolvimento Empresarial'),
(1, 2, 0, 'description', 'Ao longo da minha trajetória em Estratégia de Negócios Globais, desenvolvi habilidades essenciais para liderar transformações empresariais, construir parcerias estratégicas e entender as necessidades do mercado internacional. Agora, trago essa experiência para a área de Desenvolvimento Empresarial, onde sigo focada em proporcionar soluções de alto valor, fortalecer conexões globais e impulsionar o crescimento e inovação.');

-- About data PT
INSERT INTO cv_data (section_id, language_id, record_index, field_name, content) VALUES 
(2, 2, 0, 'text1', 'Profissional experiente em estratégias de negócios globais com mais de 10 anos de experiência no mercado internacional.'),
(2, 2, 0, 'text2', 'Especializado em desenvolvimento de estratégias de expansão, análise de mercados emergentes e implementação de soluções inovadoras para empresas multinacionais.'),
(2, 2, 0, 'stats_projects', '+50'),
(2, 2, 0, 'stats_projects_label', 'Projetos Concluídos'),
(2, 2, 0, 'stats_countries', '+20'),
(2, 2, 0, 'stats_countries_label', 'Países Atendidos'),
(2, 2, 0, 'stats_years', '10+'),
(2, 2, 0, 'stats_years_label', 'Anos de Experiência');

-- Experience data PT (múltiplos registros)
INSERT INTO cv_data (section_id, language_id, record_index, field_name, content) VALUES 
(3, 2, 0, 'title', 'CEO & Fundador'),
(3, 2, 0, 'company', 'FBD Global Business Strategy'),
(3, 2, 0, 'period', '2020 - Presente'),
(3, 2, 0, 'description', 'Liderança estratégica da empresa, desenvolvimento de parcerias internacionais e implementação de soluções inovadoras para clientes globais.'),
(3, 2, 0, 'order_index', '1'),
(3, 2, 1, 'title', 'Diretor de Estratégia'),
(3, 2, 1, 'company', 'Empresa Multinacional'),
(3, 2, 1, 'period', '2018 - 2020'),
(3, 2, 1, 'description', 'Desenvolvimento e implementação de estratégias de expansão internacional, análise de mercados e gestão de equipes multiculturais.'),
(3, 2, 1, 'order_index', '2');

-- Skills data PT (múltiplos registros)
INSERT INTO cv_data (section_id, language_id, record_index, field_name, content) VALUES 
(4, 2, 0, 'category_title', 'Estratégia de Negócios'),
(4, 2, 0, 'skills_list', 'Análise de Mercado,Planejamento Estratégico,Desenvolvimento de Negócios'),
(4, 2, 0, 'order_index', '1'),
(4, 2, 1, 'category_title', 'Liderança'),
(4, 2, 1, 'skills_list', 'Gestão de Equipes,Comunicação Intercultural,Tomada de Decisão'),
(4, 2, 1, 'order_index', '2'),
(4, 2, 2, 'category_title', 'Tecnologia'),
(4, 2, 2, 'skills_list', 'Análise de Dados,Ferramentas de Gestão,Inovação Digital'),
(4, 2, 2, 'order_index', '3');

-- Portfolio data PT (múltiplos registros)
INSERT INTO cv_data (section_id, language_id, record_index, field_name, content) VALUES 
(5, 2, 0, 'title', 'Expansão Internacional'),
(5, 2, 0, 'description', 'Estratégia de entrada em 15 novos mercados'),
(5, 2, 0, 'order_index', '1'),
(5, 2, 1, 'title', 'Parcerias Estratégicas'),
(5, 2, 1, 'description', 'Desenvolvimento de alianças globais'),
(5, 2, 1, 'order_index', '2'),
(5, 2, 2, 'title', 'Crescimento de Receita'),
(5, 2, 2, 'description', 'Aumento de 300% em 3 anos'),
(5, 2, 2, 'order_index', '3');

-- Contact data PT
INSERT INTO cv_data (section_id, language_id, record_index, field_name, content) VALUES 
(6, 2, 0, 'email', 'fabio@fbdglobal.com'),
(6, 2, 0, 'phone', '+55 (11) 99999-9999'),
(6, 2, 0, 'location', 'São Paulo, Brasil');

-- Cards data PT (múltiplos registros)
INSERT INTO cv_data (section_id, language_id, record_index, field_name, content) VALUES 
(7, 2, 0, 'title', 'Inovação'),
(7, 2, 0, 'description', 'Sempre à frente das tendências'),
(7, 2, 0, 'order_index', '1'),
(7, 2, 1, 'title', 'Liderança'),
(7, 2, 1, 'description', 'Gestão de equipes de alta performance'),
(7, 2, 1, 'order_index', '2'),
(7, 2, 2, 'title', 'Resultados'),
(7, 2, 2, 'description', 'Foco em entregas de valor'),
(7, 2, 2, 'order_index', '3');

-- Inserir dados em espanhol
-- Hero data ES
INSERT INTO cv_data (section_id, language_id, record_index, field_name, content) VALUES 
(1, 3, 0, 'name', 'Fabio Bittencourt Daniel'),
(1, 3, 0, 'title', 'Estratega de Negocios Globales y Desarrollo Empresarial'),
(1, 3, 0, 'description', 'A lo largo de mi trayectoria en Estrategia de Negocios Globales, he desarrollado habilidades esenciales para liderar transformaciones empresariales, construir alianzas estratégicas y entender las necesidades del mercado internacional. Ahora, trago esta experiencia al área de Desarrollo Empresarial, donde sigo enfocado en proporcionar soluciones de alto valor, fortalecer conexiones globales e impulsar el crecimiento y la innovación.');

-- About data ES
INSERT INTO cv_data (section_id, language_id, record_index, field_name, content) VALUES 
(2, 3, 0, 'text1', 'Profesional experimentado en estrategias de negocios globales con más de 10 años de experiencia en el mercado internacional.'),
(2, 3, 0, 'text2', 'Especializado en el desarrollo de estrategias de expansión, análisis de mercados emergentes e implementación de soluciones innovadoras para empresas multinacionales.'),
(2, 3, 0, 'stats_projects', '+50'),
(2, 3, 0, 'stats_projects_label', 'Proyectos Completados'),
(2, 3, 0, 'stats_countries', '+20'),
(2, 3, 0, 'stats_countries_label', 'Países Atendidos'),
(2, 3, 0, 'stats_years', '10+'),
(2, 3, 0, 'stats_years_label', 'Años de Experiencia');

-- Experience data ES (múltiplos registros)
INSERT INTO cv_data (section_id, language_id, record_index, field_name, content) VALUES 
(3, 3, 0, 'title', 'CEO y Fundador'),
(3, 3, 0, 'company', 'FBD Global Business Strategy'),
(3, 3, 0, 'period', '2020 - Presente'),
(3, 3, 0, 'description', 'Liderazgo estratégico de la empresa, desarrollo de alianzas internacionales e implementación de soluciones innovadoras para clientes globales.'),
(3, 3, 0, 'order_index', '1'),
(3, 3, 1, 'title', 'Director de Estrategia'),
(3, 3, 1, 'company', 'Empresa Multinacional'),
(3, 3, 1, 'period', '2018 - 2020'),
(3, 3, 1, 'description', 'Desarrollo e implementación de estrategias de expansión internacional, análisis de mercados y gestión de equipos multiculturales.'),
(3, 3, 1, 'order_index', '2');

-- Skills data ES (múltiplos registros)
INSERT INTO cv_data (section_id, language_id, record_index, field_name, content) VALUES 
(4, 3, 0, 'category_title', 'Estrategia de Negocios'),
(4, 3, 0, 'skills_list', 'Análisis de Mercado,Planificación Estratégica,Desarrollo de Negocios'),
(4, 3, 0, 'order_index', '1'),
(4, 3, 1, 'category_title', 'Liderazgo'),
(4, 3, 1, 'skills_list', 'Gestión de Equipos,Comunicación Intercultural,Toma de Decisiones'),
(4, 3, 1, 'order_index', '2'),
(4, 3, 2, 'category_title', 'Tecnología'),
(4, 3, 2, 'skills_list', 'Análisis de Datos,Herramientas de Gestión,Innovación Digital'),
(4, 3, 2, 'order_index', '3');

-- Portfolio data ES (múltiplos registros)
INSERT INTO cv_data (section_id, language_id, record_index, field_name, content) VALUES 
(5, 3, 0, 'title', 'Expansión Internacional'),
(5, 3, 0, 'description', 'Estrategia de entrada en 15 nuevos mercados'),
(5, 3, 0, 'order_index', '1'),
(5, 3, 1, 'title', 'Alianzas Estratégicas'),
(5, 3, 1, 'description', 'Desarrollo de alianzas globales'),
(5, 3, 1, 'order_index', '2'),
(5, 3, 2, 'title', 'Crecimiento de Ingresos'),
(5, 3, 2, 'description', 'Aumento del 300% en 3 años'),
(5, 3, 2, 'order_index', '3');

-- Contact data ES
INSERT INTO cv_data (section_id, language_id, record_index, field_name, content) VALUES 
(6, 3, 0, 'email', 'fabio@fbdglobal.com'),
(6, 3, 0, 'phone', '+1 (555) 123-4567'),
(6, 3, 0, 'location', 'Miami, FL, EUA');

-- Cards data ES (múltiplos registros)
INSERT INTO cv_data (section_id, language_id, record_index, field_name, content) VALUES 
(7, 3, 0, 'title', 'Innovación'),
(7, 3, 0, 'description', 'Siempre a la vanguardia de las tendencias'),
(7, 3, 0, 'order_index', '1'),
(7, 3, 1, 'title', 'Liderazgo'),
(7, 3, 1, 'description', 'Gestión de equipos de alto rendimiento'),
(7, 3, 1, 'order_index', '2'),
(7, 3, 2, 'title', 'Resultados'),
(7, 3, 2, 'description', 'Enfoque en la entrega de valor'),
(7, 3, 2, 'order_index', '3');
