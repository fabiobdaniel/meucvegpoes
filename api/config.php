<?php
// Configuração da base de dados
define('DB_HOST', 'localhost');
define('DB_NAME', 'cv_multilingual');
define('DB_USER', 'root');
define('DB_PASS', '');

// Configuração de idiomas suportados
define('SUPPORTED_LANGUAGES', ['pt', 'en', 'es']);

// Configuração de credenciais de edição
define('EDIT_USERNAME', 'fabio');
define('EDIT_PASSWORD', '1407');

// Função para conectar à base de dados
function getDBConnection() {
    try {
        $pdo = new PDO(
            "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4",
            DB_USER,
            DB_PASS,
            [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false
            ]
        );
        return $pdo;
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Database connection failed: ' . $e->getMessage()]);
        exit;
    }
}

// Função para validar credenciais
function validateCredentials($username, $password) {
    return $username === EDIT_USERNAME && $password === EDIT_PASSWORD;
}

// Função para retornar resposta JSON
function jsonResponse($data, $statusCode = 200) {
    http_response_code($statusCode);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

// Função para traduzir texto usando API gratuita
function translateText($text, $fromLang, $toLang) {
    // Mapeamento de traduções básicas para termos comuns
    $translations = [
        'CEO & Fundador' => ['en' => 'CEO & Founder', 'es' => 'CEO y Fundador'],
        'CEO & Founder' => ['pt' => 'CEO & Fundador', 'es' => 'CEO y Fundador'],
        'CEO y Fundador' => ['pt' => 'CEO & Fundador', 'en' => 'CEO & Founder'],
        
        'Estrategista de Negócios Globais' => ['en' => 'Global Business Strategist', 'es' => 'Estratega de Negocios Globales'],
        'Global Business Strategist' => ['pt' => 'Estrategista de Negócios Globais', 'es' => 'Estratega de Negocios Globales'],
        'Estratega de Negocios Globales' => ['pt' => 'Estrategista de Negócios Globais', 'en' => 'Global Business Strategist'],
        
        'Desenvolvimento Empresarial' => ['en' => 'Business Development', 'es' => 'Desarrollo Empresarial'],
        'Business Development' => ['pt' => 'Desenvolvimento Empresarial', 'es' => 'Desarrollo Empresarial'],
        'Desarrollo Empresarial' => ['pt' => 'Desenvolvimento Empresarial', 'en' => 'Business Development'],
        
        'FBD Global Business Strategy' => ['pt' => 'FBD Global Business Strategy', 'en' => 'FBD Global Business Strategy', 'es' => 'FBD Global Business Strategy'],
        
        'Diretor de Estratégia' => ['en' => 'Strategy Director', 'es' => 'Director de Estrategia'],
        'Strategy Director' => ['pt' => 'Diretor de Estratégia', 'es' => 'Director de Estrategia'],
        'Director de Estrategia' => ['pt' => 'Diretor de Estratégia', 'en' => 'Strategy Director'],
        
        'Empresa Multinacional' => ['en' => 'Multinational Company', 'es' => 'Empresa Multinacional'],
        'Multinational Company' => ['pt' => 'Empresa Multinacional', 'es' => 'Empresa Multinacional'],
        
        'São Paulo, Brasil' => ['en' => 'São Paulo, Brazil', 'es' => 'São Paulo, Brasil'],
        'São Paulo, Brazil' => ['pt' => 'São Paulo, Brasil', 'es' => 'São Paulo, Brasil'],
        
        'Presente' => ['en' => 'Present', 'es' => 'Presente'],
        'Present' => ['pt' => 'Presente', 'es' => 'Presente'],
        
        'Projetos Concluídos' => ['en' => 'Completed Projects', 'es' => 'Proyectos Completados'],
        'Completed Projects' => ['pt' => 'Projetos Concluídos', 'es' => 'Proyectos Completados'],
        'Proyectos Completados' => ['pt' => 'Projetos Concluídos', 'en' => 'Completed Projects'],
        
        'Países Atendidos' => ['en' => 'Countries Served', 'es' => 'Países Atendidos'],
        'Countries Served' => ['pt' => 'Países Atendidos', 'es' => 'Países Atendidos'],
        
        'Anos de Experiência' => ['en' => 'Years of Experience', 'es' => 'Años de Experiencia'],
        'Years of Experience' => ['pt' => 'Anos de Experiência', 'es' => 'Años de Experiencia'],
        'Años de Experiencia' => ['pt' => 'Anos de Experiência', 'en' => 'Years of Experience']
    ];
    
    // Verificar se existe tradução específica
    if (isset($translations[$text]) && isset($translations[$text][$toLang])) {
        return $translations[$text][$toLang];
    }
    
    // Se não houver tradução específica, retornar o texto original
    return $text;
}
?>
