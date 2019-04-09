CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE tables
(
	id int NOT NULL AUTO_INCREMENT,
	table_number INT(10) NOT NULL,
	ready BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

INSERT INTO tables (table_number) VALUES ("11");
INSERT INTO tables (table_number) VALUES ("12");
INSERT INTO tables (table_number, ready) VALUES ("13", true);
INSERT INTO tables (table_number, ready) VALUES ("14", true);
INSERT INTO tables (table_number, ready) VALUES ("15", true);
INSERT INTO tables (table_number) VALUES ("16");
