<?php
class Categories {
    private $conn;
    private $table = "categories";

    public $id;
    public $name;
    public $image_url;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function read() {
        $query = "SELECT * FROM " . $this->table;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    public function register() {
        $query = "INSERT INTO " . $this->table . " SET name = :name, image_url = :image_url";
        $stmt = $this->conn->prepare($query);

        // Sanitizar e associar os valores
        $this->sanitize();
        $stmt->bindParam(':name', $this->name);
        $stmt->bindParam(':image_url', $this->image_url);

        return $stmt->execute();
    }

    public function update() {
        $query = "UPDATE " . $this->table . " SET name = :name, image_url = :image_url WHERE id = :id";
        $stmt = $this->conn->prepare($query);

        // Sanitizar e associar os valores
        $this->sanitize();
        $stmt->bindParam(':id', $this->id);
        $stmt->bindParam(':name', $this->name);
        $stmt->bindParam(':image_url', $this->image_url);

        return $stmt->execute();
    }

    public function delete() {
        $query = "DELETE FROM " . $this->table . " WHERE id = ?";
        $stmt = $this->conn->prepare($query);

        // Sanitizar o ID
        $this->id = htmlspecialchars(strip_tags($this->id));
        $stmt->bindParam(1, $this->id);

        return $stmt->execute();
    }

    public function search($keywords) {
        $query = "SELECT * FROM " . $this->table . " WHERE name LIKE ?";
        $stmt = $this->conn->prepare($query);

        // Sanitizar e formatar a busca
        $keywords = htmlspecialchars(strip_tags($keywords));
        $keywords = "%{$keywords}%";

        // Associar parâmetros
        $stmt->bindParam(1, $keywords);

        return $stmt->execute();
    }

    private function sanitize() {
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->image_url = htmlspecialchars(strip_tags($this->image_url));
    }
}
?>