CREATE DATABASE WEBDB;
USE WEBDB;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE games (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    platform ENUM('PS', 'XBOX', 'PC', 'SWITCH') NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    sales INT DEFAULT 0
);

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image_url VARCHAR(255) NOT NULL
);

CREATE TABLE game_category (
    game_id INT NOT NULL,
    category_id INT NOT NULL,
    PRIMARY KEY (game_id, category_id),
    FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

CREATE TABLE sales (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    game_id INT NOT NULL,
    sale_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE
);

CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    game_id INT NOT NULL,
    rating TINYINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    review TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE
);

INSERT INTO games (name, platform, description, price, image_url) VALUES
('The Last of Us Part II', 'PS', 'A sequel to the critically acclaimed The Last of Us, this game follows Ellie as she navigates a post-apocalyptic world.', 59.99, 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2B7kZL._AC_SL1500_.jpg'),
('Cyberpunk 2077', 'PC', 'A first-person open-world RPG set in the dystopian Night City, where players take on the role of V, a mercenary outlaw.', 49.99, 'https://images-na.ssl-images-amazon.com/images/I/81a1%2B6V7kZL._AC_SL1500_.jpg'),
('Animal Crossing: New Horizons', 'SWITCH', 'A life simulation game where players can create their own island paradise and interact with anthropomorphic animals.', 49.99, 'https://images-na.ssl-images-amazon.com/images/I/81J1%2B6V7kZL._AC_SL1500_.jpg'),
('Halo Infinite', 'XBOX', 'The latest installment in the Halo series, featuring the return of Master Chief and a new open-world gameplay experience.', 59.99, 'https://images-na.ssl-images-amazon.com/images/I/81J1%2B6V7kZL._AC_SL1500_.jpg'),
('The Witcher 3: Wild Hunt', 'PC', 'An action RPG set in a dark fantasy world, where players take on the role of Geralt of Rivia, a monster hunter for hire.', 29.99, 'https://images-na.ssl-images-amazon.com/images/I/81J1%2B6V7kZL._AC_SL1500_.jpg'),
('Super Mario Odyssey', 'SWITCH', 'A 3D platformer where players control Mario as he embarks on a globe-trotting adventure to rescue Princess Peach from Bowser.', 49.99, 'https://images-na.ssl-images-amazon.com/images/I/81J1%2B6V7kZL._AC_SL1500_.jpg'),
('Red Dead Redemption 2', 'XBOX', 'An open-world action-adventure game set in the American Wild West, where players take on the role of outlaw Arthur Morgan.', 39.99, 'https://images-na.ssl-images-amazon.com/images/I/81J1%2B6V7kZL._AC_SL1500_.jpg'),
('The Legend of Zelda: Breath of the Wild', 'SWITCH', 'An action-adventure game set in the kingdom of Hyrule, where players control Link as he battles against the evil Calamity Ganon.', 59.99, 'https://images-na.ssl-images-amazon.com/images/I/81J1%2B6V7kZL._AC_SL1500_.jpg');

INSERT INTO categories (name, image_url) VALUES
('Action', 'https://images-na.ssl-images-amazon.com/images/I/81J1%2B6V7kZL._AC_SL1500_.jpg'),
('Adventure', 'https://images-na.ssl-images-amazon.com/images/I/81J1%2B6V7kZL._AC_SL1500_.jpg'),
('RPG', 'https://images-na.ssl-images-amazon.com/images/I/81J1%2B6V7kZL._AC_SL1500_.jpg'),
('Simulation', 'https://images-na.ssl-images-amazon.com/images/I/81J1%2B6V7kZL._AC_SL1500_.jpg'),
('Platformer', 'https://images-na.ssl-images-amazon.com/images/I/81J1%2B6V7kZL._AC_SL1500_.jpg');