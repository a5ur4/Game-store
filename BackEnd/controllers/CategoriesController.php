<?php 
include_once __DIR__ . '/../config/dbconfig.php';
include_once __DIR__ . '/../models/Categories.php';

class CategoriesController {
    private $conn;
    private $categoriesModel;

    public function __construct() {
        $database = new Database();
        $this->conn = $database->connect();
        $this->categoriesModel = new Categories($this->conn);
    }

    // Lista todas as categorias
    public function listCategories() {
        $result = $this->categoriesModel->read();
        $categories = $result->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($categories);
    }

    // Busca uma categoria específica pelo ID
    public function getCategory($id) {
        $this->categoriesModel->id = $id;
        if ($this->categoriesModel->read_single()) {
            echo json_encode([
                'id' => $this->categoriesModel->id,
                'name' => $this->categoriesModel->name,
                'image_url' => $this->categoriesModel->image_url
            ]);
        } else {
            echo json_encode(['message' => 'Category not found']);
        }
    }

    // Cria uma nova categoria
    public function createCategory($data) {
        $this->categoriesModel->name = $data['name'];
        $this->categoriesModel->image_url = $data['image_url'];

        if ($this->categoriesModel->register()) {
            echo json_encode(['message' => 'Category created successfully']);
        } else {
            echo json_encode(['message' => 'Category could not be created']);
        }
    }

    // Atualiza uma categoria existente
    public function updateCategory($id, $data) {
        $this->categoriesModel->id = $id;
        $this->categoriesModel->name = $data['name'];
        $this->categoriesModel->image_url = $data['image_url'];

        if ($this->categoriesModel->update()) {
            echo json_encode(['message' => 'Category updated successfully']);
        } else {
            echo json_encode(['message' => 'Category could not be updated']);
        }
    }

    // Exclui uma categoria pelo ID
    public function deleteCategory($id) {
        $this->categoriesModel->id = $id;
        if ($this->categoriesModel->delete()) {
            echo json_encode(['message' => 'Category deleted successfully']);
        } else {
            echo json_encode(['message' => 'Category could not be deleted']);
        }
    }

    // Busca categorias com base em um termo
    public function search($name) {
        $result = $this->categoriesModel->search($name);
        $categories = $result->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($categories);
    }
}

// Roteamento básico para chamadas HTTP
$controller = new CategoriesController();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['id'])) {
        // Busca uma categoria pelo ID
        $controller->getCategory($_GET['id']);
    } elseif (isset($_GET['search'])) {
        // Busca categorias pelo nome
        $controller->search($_GET['search']);
    } else {
        // Lista todas as categorias
        $controller->listCategories();
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recebe dados em JSON para criar uma nova categoria
    $data = json_decode(file_get_contents("php://input"), true);
    $controller->createCategory($data);
} elseif ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    // Recebe dados em JSON para atualizar uma categoria
    parse_str(file_get_contents("php://input"), $data);
    $id = $data['id'];
    $controller->updateCategory($id, $data);
} elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    // Recebe o ID em JSON para excluir uma categoria
    parse_str(file_get_contents("php://input"), $data);
    $id = $data['id'];
    $controller->deleteCategory($id);
}

?>
