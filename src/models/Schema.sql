DROP DATABASE IF EXISTS inventario;
CREATE DATABASE inventario;
USE inventario;

CREATE TABLE IF NOT EXISTS categorias_produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

INSERT INTO categorias_produtos (nome)
VALUES ('Eletrônicos');

CREATE TABLE IF NOT EXISTS produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10, 2),
    id_categoria INT,
    FOREIGN KEY (id_categoria) REFERENCES categorias_produtos(id)
);

SHOW TABLES;
DESCRIBE categorias_produtos;
DESCRIBE produtos;

