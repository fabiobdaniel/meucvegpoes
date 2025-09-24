<?php
// API simplificada para teste sem base de dados
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Responder a requisições OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$action = $_GET['action'] ?? '';
$lang = $_GET['lang'] ?? 'en';

// Dados estáticos para cada idioma
$data = [
    'en' => [
        'hero' => [
            'name' => 'Fabio Bittencourt Daniel',
            'title' => 'Global Business Strategist & Business Development',
            'description' => 'Throughout my career in Global Business Strategy, I have developed essential skills to lead business transformations, build strategic partnerships and understand the needs of the international market. Now, I bring this experience to the Business Development area, where I remain focused on providing high-value solutions, strengthening global connections and driving growth and innovation.'
        ],
        'about' => [
            'text1' => 'Experienced professional in global business strategies with more than 10 years of experience in the international market.',
            'text2' => 'Specialized in developing expansion strategies, analyzing emerging markets and implementing innovative solutions for multinational companies.',
            'stats_projects' => '+50',
            'stats_projects_label' => 'Completed Projects',
            'stats_countries' => '+20',
            'stats_countries_label' => 'Countries Served',
            'stats_years' => '10+',
            'stats_years_label' => 'Years of Experience'
        ],
        'experience' => [
            'job1_title' => 'CEO & Founder',
            'job1_company' => 'FBD Global Business Strategy',
            'job1_period' => '2020 - Present',
            'job1_description' => 'Strategic leadership of the company, development of international partnerships and implementation of innovative solutions for global clients.',
            'job2_title' => 'Strategy Director',
            'job2_company' => 'Multinational Company',
            'job2_period' => '2018 - 2020',
            'job2_description' => 'Development and implementation of international expansion strategies, market analysis and management of multicultural teams.'
        ],
        'skills' => [
            'strategy_title' => 'Business Strategy',
            'strategy_items' => 'Market Analysis,Strategic Planning,Business Development',
            'leadership_title' => 'Leadership',
            'leadership_items' => 'Team Management,Cross-cultural Communication,Decision Making',
            'tech_title' => 'Technology',
            'tech_items' => 'Data Analysis,Management Tools,Digital Innovation'
        ],
        'portfolio' => [
            'project1_title' => 'International Expansion',
            'project1_desc' => 'Entry strategy into 15 new markets',
            'project2_title' => 'Strategic Partnerships',
            'project2_desc' => 'Development of global alliances',
            'project3_title' => 'Revenue Growth',
            'project3_desc' => '300% increase in 3 years'
        ],
        'contact' => [
            'email' => 'fabio@fbdglobal.com',
            'phone' => '+1 (555) 123-4567',
            'location' => 'Miami, FL, USA'
        ],
        'cards' => [
            'innovation_title' => 'Innovation',
            'innovation_desc' => 'Always ahead of trends',
            'leadership_title' => 'Leadership',
            'leadership_desc' => 'High-performance team management',
            'results_title' => 'Results',
            'results_desc' => 'Focus on value delivery'
        ]
    ],
    'pt' => [
        'hero' => [
            'name' => 'Fabio Bittencourt Daniel',
            'title' => 'Estrategista de Negócios Globais & Desenvolvimento Empresarial',
            'description' => 'Ao longo da minha trajetória em Estratégia de Negócios Globais, desenvolvi habilidades essenciais para liderar transformações empresariais, construir parcerias estratégicas e entender as necessidades do mercado internacional. Agora, trago essa experiência para a área de Desenvolvimento Empresarial, onde sigo focada em proporcionar soluções de alto valor, fortalecer conexões globais e impulsionar o crescimento e inovação.'
        ],
        'about' => [
            'text1' => 'Profissional experiente em estratégias de negócios globais com mais de 10 anos de experiência no mercado internacional.',
            'text2' => 'Especializado em desenvolvimento de estratégias de expansão, análise de mercados emergentes e implementação de soluções inovadoras para empresas multinacionais.',
            'stats_projects' => '+50',
            'stats_projects_label' => 'Projetos Concluídos',
            'stats_countries' => '+20',
            'stats_countries_label' => 'Países Atendidos',
            'stats_years' => '10+',
            'stats_years_label' => 'Anos de Experiência'
        ],
        'experience' => [
            'job1_title' => 'CEO & Fundador',
            'job1_company' => 'FBD Global Business Strategy',
            'job1_period' => '2020 - Presente',
            'job1_description' => 'Liderança estratégica da empresa, desenvolvimento de parcerias internacionais e implementação de soluções inovadoras para clientes globais.',
            'job2_title' => 'Diretor de Estratégia',
            'job2_company' => 'Empresa Multinacional',
            'job2_period' => '2018 - 2020',
            'job2_description' => 'Desenvolvimento e implementação de estratégias de expansão internacional, análise de mercados e gestão de equipes multiculturais.'
        ],
        'skills' => [
            'strategy_title' => 'Estratégia de Negócios',
            'strategy_items' => 'Análise de Mercado,Planejamento Estratégico,Desenvolvimento de Negócios',
            'leadership_title' => 'Liderança',
            'leadership_items' => 'Gestão de Equipes,Comunicação Intercultural,Tomada de Decisão',
            'tech_title' => 'Tecnologia',
            'tech_items' => 'Análise de Dados,Ferramentas de Gestão,Inovação Digital'
        ],
        'portfolio' => [
            'project1_title' => 'Expansão Internacional',
            'project1_desc' => 'Estratégia de entrada em 15 novos mercados',
            'project2_title' => 'Parcerias Estratégicas',
            'project2_desc' => 'Desenvolvimento de alianças globais',
            'project3_title' => 'Crescimento de Receita',
            'project3_desc' => 'Aumento de 300% em 3 anos'
        ],
        'contact' => [
            'email' => 'fabio@fbdglobal.com',
            'phone' => '+55 (11) 99999-9999',
            'location' => 'São Paulo, Brasil'
        ],
        'cards' => [
            'innovation_title' => 'Inovação',
            'innovation_desc' => 'Sempre à frente das tendências',
            'leadership_title' => 'Liderança',
            'leadership_desc' => 'Gestão de equipes de alta performance',
            'results_title' => 'Resultados',
            'results_desc' => 'Foco em entregas de valor'
        ]
    ],
    'es' => [
        'hero' => [
            'name' => 'Fabio Bittencourt Daniel',
            'title' => 'Estratega de Negocios Globales y Desarrollo Empresarial',
            'description' => 'A lo largo de mi trayectoria en Estrategia de Negocios Globales, he desarrollado habilidades esenciales para liderar transformaciones empresariales, construir alianzas estratégicas y entender las necesidades del mercado internacional. Ahora, trago esta experiencia al área de Desarrollo Empresarial, donde sigo enfocado en proporcionar soluciones de alto valor, fortalecer conexiones globales e impulsar el crecimiento y la innovación.'
        ],
        'about' => [
            'text1' => 'Profesional experimentado en estrategias de negocios globales con más de 10 años de experiencia en el mercado internacional.',
            'text2' => 'Especializado en el desarrollo de estrategias de expansión, análisis de mercados emergentes e implementación de soluciones innovadoras para empresas multinacionales.',
            'stats_projects' => '+50',
            'stats_projects_label' => 'Proyectos Completados',
            'stats_countries' => '+20',
            'stats_countries_label' => 'Países Atendidos',
            'stats_years' => '10+',
            'stats_years_label' => 'Años de Experiencia'
        ],
        'experience' => [
            'job1_title' => 'CEO y Fundador',
            'job1_company' => 'FBD Global Business Strategy',
            'job1_period' => '2020 - Presente',
            'job1_description' => 'Liderazgo estratégico de la empresa, desarrollo de alianzas internacionales e implementación de soluciones innovadoras para clientes globales.',
            'job2_title' => 'Director de Estrategia',
            'job2_company' => 'Empresa Multinacional',
            'job2_period' => '2018 - 2020',
            'job2_description' => 'Desarrollo e implementación de estrategias de expansión internacional, análisis de mercados y gestión de equipos multiculturales.'
        ],
        'skills' => [
            'strategy_title' => 'Estrategia de Negocios',
            'strategy_items' => 'Análisis de Mercado,Planificación Estratégica,Desarrollo de Negocios',
            'leadership_title' => 'Liderazgo',
            'leadership_items' => 'Gestión de Equipos,Comunicación Intercultural,Toma de Decisiones',
            'tech_title' => 'Tecnología',
            'tech_items' => 'Análisis de Datos,Herramientas de Gestión,Innovación Digital'
        ],
        'portfolio' => [
            'project1_title' => 'Expansión Internacional',
            'project1_desc' => 'Estrategia de entrada en 15 nuevos mercados',
            'project2_title' => 'Alianzas Estratégicas',
            'project2_desc' => 'Desarrollo de alianzas globales',
            'project3_title' => 'Crecimiento de Ingresos',
            'project3_desc' => 'Aumento del 300% en 3 años'
        ],
        'contact' => [
            'email' => 'fabio@fbdglobal.com',
            'phone' => '+1 (555) 123-4567',
            'location' => 'Miami, FL, EUA'
        ],
        'cards' => [
            'innovation_title' => 'Innovación',
            'innovation_desc' => 'Siempre a la vanguardia de las tendencias',
            'leadership_title' => 'Liderazgo',
            'leadership_desc' => 'Gestión de equipos de alto rendimiento',
            'results_title' => 'Resultados',
            'results_desc' => 'Enfoque en la entrega de valor'
        ]
    ]
];

if ($action === 'get_data') {
    if (isset($data[$lang])) {
        echo json_encode(['success' => true, 'data' => $data[$lang]]);
    } else {
        echo json_encode(['success' => false, 'error' => 'Language not supported']);
    }
} else {
    echo json_encode(['success' => false, 'error' => 'Invalid action']);
}
?>

