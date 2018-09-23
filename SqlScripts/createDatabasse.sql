CREATE DATABASE IF NOT EXISTS programathon;
USE programathon;

CREATE TABLE IF NOT EXISTS usuario(
	id_usuario INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	password_diggest VARCHAR(256),
	telefono VARCHAR(40),
	nombre VARCHAR(40),
	correo VARCHAR(60),
	cedula VARCHAR(20),
	rol VARCHAR(20),
	activo BOOL
);


CREATE TABLE IF NOT EXISTS etnia(
	id_etnia INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nombre varchar(40)
);


CREATE TABLE IF NOT EXISTS paciente(
	id_paciente INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(40),
	id_usuario INT NOT NULL,
	cedula VARCHAR(20),
	edad SMALLINT,
	genero VARCHAR(20),
	id_etnia INT NOT NULL,
	parentesco VARCHAR(20),
	activo BOOL
);

ALTER TABLE paciente
ADD FOREIGN KEY (id_usuario) 
REFERENCES usuario(id_usuario);

ALTER TABLE paciente
ADD FOREIGN KEY (id_etnia) 
REFERENCES etnia(id_etnia);



CREATE TABLE IF NOT EXISTS enfermedad(
	id_enfermedad INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	id_paciente INT NOT NULL,
	fecha DATE,
	detalle VARCHAR(4096),
	activo BOOL
);

 
 ALTER TABLE enfermedad
ADD FOREIGN KEY (id_paciente) 
REFERENCES paciente(id_paciente);

CREATE TABLE IF NOT EXISTS tratamiento(
	id_tratamiento INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	id_paciente INT NOT NULL,
	detalle VARCHAR(4096),
	fecha DATE,
	activo BOOL
);

ALTER TABLE tratamiento
ADD FOREIGN KEY (id_paciente) 
REFERENCES paciente(id_paciente);

CREATE TABLE IF NOT EXISTS medicina(
	id_medicina INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	id_tratamiento INT NOT NULL,
	nombre VARCHAR(512),
	dosis  VARCHAR(512),
	detalle VARCHAR(4096),
	fecha DATETIME,
	fechaFin DATETIME,
	activo BOOL
);


ALTER TABLE medicina
ADD FOREIGN KEY (id_tratamiento) 
REFERENCES tratamiento(id_tratamiento);

CREATE TABLE IF NOT EXISTS tratamientoFisico(
	id_tratamiento_fisico INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	id_tratamiento INT NOT NULL,
	detalle VARCHAR(4096),
	activo BOOL
);


ALTER TABLE tratamientoFisico
ADD FOREIGN KEY (id_tratamiento) 
REFERENCES tratamiento(id_tratamiento);