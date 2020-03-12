CREATE DATABASE an_games_db;

USE an_games_db;

 CREATE TABLE game(
     id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
     title VARCHAR(100),
     description VARCHAR(200),
     image VARCHAR(200),
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 );

 RENAME TABLE game to games;

 DESCRIBE game;