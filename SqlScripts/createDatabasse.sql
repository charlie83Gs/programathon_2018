CREATE DATABASE programathon;
USE programathon;

CREATE TABLE usuario(
	id_usuario INT NOT NULL AUTO_INCREMENT,
	password_diggest VARCHAR(256),
	telefono VARCHAR(40),
	nombre VARCHAR(40),
	correo VARCHAR(60),
	cedula VARCHAR(20),
	activo BOOL
);

ALTER TABLE usuario
ADD PRIMARY KEY (id_usuario);

CREATE TABLE paciente(
	id_paciente INT NOT NULL AUTO_INCREMENT,
	id_usuario INT NOT NULL,
	cedula VARCAHR,
);

ALTER TABLE paciente
ADD PRIMARY KEY (id_paciente);

ALTER TABLE usuario
ADD FOREIGN KEY (id_usuario) 
REFERENCES usuario(id_usuario);