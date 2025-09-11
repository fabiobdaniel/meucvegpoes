<?php
require_once 'config.php';

// Configurar CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Responder a requisições OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Obter método e ação
$method = $_SERVER['REQUEST_METHOD'];
$action = $_GET['action'] ?? '';

try {
    switch ($action) {
        case 'get_data':
            if ($method === 'GET') {
                getCVData();
            } else {
                jsonResponse(['error' => 'Method not allowed'], 405);
            }
            break;
            
        case 'update_data':
            if ($method === 'POST') {
                updateCVData();
            } else {
                jsonResponse(['error' => 'Method not allowed'], 405);
            }
            break;
            
        case 'login':
            if ($method === 'POST') {
                loginUser();
            } else {
                jsonResponse(['error' => 'Method not allowed'], 405);
            }
            break;
            
        default:
            jsonResponse(['error' => 'Invalid action'], 400);
    }
} catch (Exception $e) {
    jsonResponse(['error' => 'Server error: ' . $e->getMessage()], 500);
}

function getCVData() {
    $pdo = getDBConnection();
    $language = $_GET['lang'] ?? 'en';
    
    if (!in_array($language, SUPPORTED_LANGUAGES)) {
        jsonResponse(['error' => 'Unsupported language'], 400);
    }
    
    $stmt = $pdo->prepare("
        SELECT section, field_key, content 
        FROM cv_data 
        WHERE language_code = ? 
        ORDER BY section, field_key
    ");
    $stmt->execute([$language]);
    $data = $stmt->fetchAll();
    
    // Organizar dados por seção
    $organizedData = [];
    foreach ($data as $row) {
        $organizedData[$row['section']][$row['field_key']] = $row['content'];
    }
    
    jsonResponse(['success' => true, 'data' => $organizedData]);
}

function updateCVData() {
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input) {
        jsonResponse(['error' => 'Invalid JSON data'], 400);
    }
    
    // Validar credenciais
    if (!isset($input['username']) || !isset($input['password'])) {
        jsonResponse(['error' => 'Credentials required'], 401);
    }
    
    if (!validateCredentials($input['username'], $input['password'])) {
        jsonResponse(['error' => 'Invalid credentials'], 401);
    }
    
    if (!isset($input['data']) || !isset($input['language'])) {
        jsonResponse(['error' => 'Data and language required'], 400);
    }
    
    $language = $input['language'];
    if (!in_array($language, SUPPORTED_LANGUAGES)) {
        jsonResponse(['error' => 'Unsupported language'], 400);
    }
    
    $pdo = getDBConnection();
    
    try {
        $pdo->beginTransaction();
        
        // Atualizar dados no idioma especificado
        $stmt = $pdo->prepare("
            INSERT INTO cv_data (section, field_key, language_code, content) 
            VALUES (?, ?, ?, ?) 
            ON DUPLICATE KEY UPDATE content = VALUES(content), updated_at = CURRENT_TIMESTAMP
        ");
        
        foreach ($input['data'] as $section => $fields) {
            foreach ($fields as $fieldKey => $content) {
                $stmt->execute([$section, $fieldKey, $language, $content]);
            }
        }
        
        // Traduzir para outros idiomas
        $otherLanguages = array_diff(SUPPORTED_LANGUAGES, [$language]);
        
        foreach ($otherLanguages as $targetLang) {
            foreach ($input['data'] as $section => $fields) {
                foreach ($fields as $fieldKey => $content) {
                    $translatedContent = translateText($content, $language, $targetLang);
                    $stmt->execute([$section, $fieldKey, $targetLang, $translatedContent]);
                }
            }
        }
        
        $pdo->commit();
        jsonResponse(['success' => true, 'message' => 'Data updated successfully']);
        
    } catch (Exception $e) {
        $pdo->rollBack();
        jsonResponse(['error' => 'Failed to update data: ' . $e->getMessage()], 500);
    }
}

function loginUser() {
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input || !isset($input['username']) || !isset($input['password'])) {
        jsonResponse(['error' => 'Username and password required'], 400);
    }
    
    if (validateCredentials($input['username'], $input['password'])) {
        jsonResponse(['success' => true, 'message' => 'Login successful']);
    } else {
        jsonResponse(['error' => 'Invalid credentials'], 401);
    }
}
?>
