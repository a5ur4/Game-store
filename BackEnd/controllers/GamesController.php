<?php
// Inclua o arquivo de conexão com o banco de dados e o modelo Games
include_once '../config/dbconfig.php';
include_once '../models/Games.php';

class GamesController {
    private $conn;
    private $gamesModel;

    public function __construct() {
        // Inicia a conexão com o banco de dados e o modelo Games
        $database = new Database();
        $this->conn = $database->connect();
        $this->gamesModel = new Games($this->conn);
    }

    // Método para listar todos os jogos
    public function listGames() {
        $result = $this->gamesModel->read();
        $games = $result->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($games);
    }

    // Método para buscar um jogo específico pelo ID
    public function getGame($id) {
        $this->gamesModel->id = $id;
        if ($this->gamesModel->read_single()) {
            // Retornar os dados do jogo em JSON
            echo json_encode([
                'id' => $this->gamesModel->id,
                'name' => $this->gamesModel->name,
                'platform' => $this->gamesModel->platform,
                'description' => $this->gamesModel->description,
                'price' => $this->gamesModel->price,
                'image_url' => $this->gamesModel->image_url,
                'sales' => $this->gamesModel->sales
            ]);
        } else {
            // Retornar uma mensagem de erro se o jogo não for encontrado
            echo json_encode(['message' => 'Game not found']);
        }
    }

    // Método para registrar um novo jogo
    public function createGame($data) {
        $this->gamesModel->name = $data['name'];
        $this->gamesModel->platform = $data['platform'];
        $this->gamesModel->description = $data['description'];
        $this->gamesModel->price = $data['price'];
        $this->gamesModel->image_url = $data['image_url'];
        $this->gamesModel->sales = $data['sales'];

        if ($this->gamesModel->register()) {
            echo json_encode(['message' => 'Game created successfully']);
        } else {
            echo json_encode(['message' => 'Game could not be created']);
        }
    }

    // Método para atualizar um jogo existente
    public function updateGame($id, $data) {
        $this->gamesModel->id = $id;
        $this->gamesModel->name = $data['name'];
        $this->gamesModel->platform = $data['platform'];
        $this->gamesModel->description = $data['description'];
        $this->gamesModel->price = $data['price'];
        $this->gamesModel->image_url = $data['image_url'];
        $this->gamesModel->sales = $data['sales'];

        if ($this->gamesModel->update()) {
            echo json_encode(['message' => 'Game updated successfully']);
        } else {
            echo json_encode(['message' => 'Game could not be updated']);
        }
    }

    // Método para excluir um jogo pelo ID
    public function deleteGame($id) {
        $this->gamesModel->id = $id;
        if ($this->gamesModel->delete()) {
            echo json_encode(['message' => 'Game deleted successfully']);
        } else {
            echo json_encode(['message' => 'Game could not be deleted']);
        }
    }

    // Método para buscar jogos com base em palavras-chave
    public function searchGames($keywords) {
        $result = $this->gamesModel->search($keywords);
        $games = $result->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($games);
    }
}

// Exemplo de roteamento básico para chamadas HTTP
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $controller = new GamesController();

    if (isset($_GET['id'])) {
        // Rota para obter um único jogo pelo ID
        $controller->getGame($_GET['id']);
    } elseif (isset($_GET['search'])) {
        // Rota para buscar jogos por palavras-chave
        $controller->searchGames($_GET['search']);
    } else {
        // Rota para listar todos os jogos
        $controller->listGames();
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $controller = new GamesController();
    $data = json_decode(file_get_contents("php://input"), true);
    $controller->createGame($data);
} elseif ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $controller = new GamesController();
    parse_str(file_get_contents("php://input"), $data);
    $id = $data['id'];
    $controller->updateGame($id, $data);
} elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $controller = new GamesController();
    parse_str(file_get_contents("php://input"), $data);
    $id = $data['id'];
    $controller->deleteGame($id);
}

?>
