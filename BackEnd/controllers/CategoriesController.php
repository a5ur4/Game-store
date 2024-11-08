<?php 
include_once '../config/dbconfig.php';
include_once '../models/Categories.php';

class CategoriesController {
    private $conn;
    private $categoriesModel;

    public function __construct() {
        $database = new Database();
        $this->conn = $database->connect();
        $this->categoriesModel = new Categories($this->conn);
    }
}

?>