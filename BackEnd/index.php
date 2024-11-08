<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once './config/dbconfig.php';
include_once 'controllers/GamesController.php';
include_once 'controllers/CategoriesController.php';

$requestUrl = $_SERVER['REQUEST_URI'];
$method = $_SERVER['REQUEST_METHOD'];

// Função para obter o corpo da requisição
function getBodyRequest() {
    $body = file_get_contents('php://input');
    return json_decode($body, true);
}

// Função para extrair a rota do URL
function getRoutePath($requestUrl) {
    $url = explode('/', $requestUrl);
    return isset($url[1]) ? $url[1] : ''; // Ajuste para garantir que a URL correta seja extraída
}

$route = getRoutePath($requestUrl);

// Definindo as rotas e métodos
switch ($route) {
    case 'games':
        $controller = new GamesController();
        
        switch ($method) {
            case 'GET':
                if (isset($_GET['id'])) {
                    $controller->getGame($_GET['id']);
                } else {
                    $controller->listGames();
                }
                break;
            
            case 'POST':
                $data = getBodyRequest();
                $controller->createGame($data);
                break;
            
            case 'PUT':
                if (isset($_GET['id'])) {
                    $id = $_GET['id'];
                    $data = getBodyRequest();
                    $controller->updateGame($id, $data);
                } else {
                    http_response_code(400);
                    echo json_encode(['message' => 'ID necessário para atualização']);
                }
                break;
            
            case 'DELETE':
                if (isset($_GET['id'])) {
                    $id = $_GET['id'];
                    $controller->deleteGame($id);
                } else {
                    http_response_code(400);
                    echo json_encode(['message' => 'ID necessário para exclusão']);
                }
                break;
            
            default:
                http_response_code(404);
                echo json_encode(['message' => 'Método não permitido']);
                break;
        }
        break;

    case 'categories':
        $controller = new CategoriesController();
        
        switch ($method) {
            case 'GET':
                if (isset($_GET['id'])) {
                    $controller->getCategory($_GET['id']);
                } else {
                    $controller->listCategories();
                }
                break;
            
            case 'POST':
                $data = getBodyRequest();
                $controller->createCategory($data);
                break;
            
            case 'PUT':
                if (isset($_GET['id'])) {
                    $id = $_GET['id'];
                    $data = getBodyRequest();
                    $controller->updateCategory($id, $data);
                } else {
                    http_response_code(400);
                    echo json_encode(['message' => 'ID necessário para atualização']);
                }
                break;
            
            case 'DELETE':
                if (isset($_GET['id'])) {
                    $id = $_GET['id'];
                    $controller->deleteCategory($id);
                } else {
                    http_response_code(400);
                    echo json_encode(['message' => 'ID necessário para exclusão']);
                }
                break;
            
            default:
                http_response_code(404);
                echo json_encode(['message' => 'Método não permitido']);
                break;
        }
        break;

    default:
        http_response_code(404);
        echo json_encode(['message' => 'Rota não encontrada']);
        break;
}
?>
