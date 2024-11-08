<?php
class Games {
    private $conn;
    private $table = "games";

    // Propriedades da classe
    public $id;
    public $name;
    public $platform;
    public $description;
    public $price;
    public $image_url;
    public $sales;

    // Construtor para inicializar a conexão com o banco de dados
    public function __construct($db) {
        $this->conn = $db;
    }

    // Método para ler todos os registros da tabela
    public function read() {
        $query = "SELECT * FROM " . $this->table;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    // Método para ler um registro específico por ID
    public function read_single() {
        $query = "SELECT * FROM " . $this->table . " WHERE id = ?";
        $stmt = $this->conn->prepare($query);

        // Sanitizar o ID antes de utilizar
        $this->id = htmlspecialchars(strip_tags($this->id));

        // Associar o parâmetro ID
        $stmt->bindParam(1, $this->id);
        if ($stmt->execute()) {
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            if ($row) {
                // Preencher as propriedades da classe com os dados obtidos
                $this->name = $row['name'];
                $this->platform = $row['platform'];
                $this->description = $row['description'];
                $this->price = $row['price'];
                $this->image_url = $row['image_url'];
                $this->sales = $row['sales'];
                return true;
            }
        }
        return false; // Retornar false se não houver resultado
    }

    // Método para registrar um novo jogo na tabela
    public function register() {
        $query = "INSERT INTO " . $this->table . " SET name = :name, platform = :platform, description = :description, price = :price, image_url = :image_url, sales = :sales";
        $stmt = $this->conn->prepare($query);

        // Sanitizar e associar os valores
        $this->sanitize();
        $stmt->bindParam(':name', $this->name);
        $stmt->bindParam(':platform', $this->platform);
        $stmt->bindParam(':description', $this->description);
        $stmt->bindParam(':price', $this->price);
        $stmt->bindParam(':image_url', $this->image_url);
        $stmt->bindParam(':sales', $this->sales);

        return $stmt->execute();
    }

    // Método para atualizar um registro existente
    public function update() {
        $query = "UPDATE " . $this->table . " SET name = :name, platform = :platform, description = :description, price = :price, image_url = :image_url, sales = :sales WHERE id = :id";
        $stmt = $this->conn->prepare($query);

        // Sanitizar e associar os valores
        $this->sanitize();
        $stmt->bindParam(':id', $this->id);
        $stmt->bindParam(':name', $this->name);
        $stmt->bindParam(':platform', $this->platform);
        $stmt->bindParam(':description', $this->description);
        $stmt->bindParam(':price', $this->price);
        $stmt->bindParam(':image_url', $this->image_url);
        $stmt->bindParam(':sales', $this->sales);

        return $stmt->execute();
    }

    // Método para deletar um registro por ID
    public function delete() {
        $query = "DELETE FROM " . $this->table . " WHERE id = ?";
        $stmt = $this->conn->prepare($query);

        // Sanitizar o ID
        $this->id = htmlspecialchars(strip_tags($this->id));
        $stmt->bindParam(1, $this->id);

        return $stmt->execute();
    }

    // Método para buscar jogos por nome, plataforma ou descrição
    public function search($keywords) {
        $query = "SELECT * FROM " . $this->table . " WHERE name LIKE ? OR platform LIKE ? OR description LIKE ?";
        $stmt = $this->conn->prepare($query);

        // Sanitizar e formatar a busca
        $keywords = htmlspecialchars(strip_tags($keywords));
        $keywords = "%{$keywords}%";

        // Associar parâmetros
        $stmt->bindParam(1, $keywords);
        $stmt->bindParam(2, $keywords);
        $stmt->bindParam(3, $keywords);

        $stmt->execute();
        return $stmt;
    }

    // Método auxiliar para sanitizar os dados
    private function sanitize() {
        $this->id = htmlspecialchars(strip_tags($this->id));
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->platform = htmlspecialchars(strip_tags($this->platform));
        $this->description = htmlspecialchars(strip_tags($this->description));
        $this->price = htmlspecialchars(strip_tags($this->price));
        $this->image_url = htmlspecialchars(strip_tags($this->image_url));
        $this->sales = htmlspecialchars(strip_tags($this->sales));
    }
}
?>
