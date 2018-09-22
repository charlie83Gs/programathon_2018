CREATE DATABASE programathon;
USE programathon;

CREATE TABLE usuario(
	id_usuario INT NOT NULL AUTO_INCREMENT,
	password_diggest VARCHAR(256),
	telefono VARCHAR(40),
	nombre VARCHAR(40),
	correo VARCHAR(60),
	cedula VARCHAR(20),
	rol VARCHAR(20),
	activo BOOL
);

ALTER TABLE usuario
ADD PRIMARY KEY (id_usuario);


CREATE TABLE etnia(
	id_etnia INT NOT NULL AUTO_INCREMENT,
	nombre varchar(40)
);

ALTER TABLE etnia
ADD PRIMARY KEY (id_etnia);


CREATE TABLE paciente(
	id_paciente INT NOT NULL AUTO_INCREMENT,
	id_usuario INT NOT NULL,
	cedula VARCHAR(20),
	edad SMALLINT,
	genero varchar,
	id_etnia INT NOT NULL,
	activo BOOL
);

ALTER TABLE paciente
ADD PRIMARY KEY (id_paciente);

ALTER TABLE paciente
ADD FOREIGN KEY (id_usuario) 
REFERENCES usuario(id_usuario);

ALTER TABLE paciente
ADD FOREIGN KEY (id_etnia) 
REFERENCES etnia(id_etnia);


CREATE TABLE enfermedad(
	id_enfermedad INT NOT NULL AUTO_INCREMENT,
	id_paciente INT NOT NULL,
	detalle VARCHAR(4096),
	activo BOOL
);

ALTER TABLE enfermedad
ADD PRIMARY KEY (id_enfermedad);
 
 ALTER TABLE enfermedad
ADD FOREIGN KEY (id_paciente) 
REFERENCES id_paciente(id_paciente);

CREATE TABLE tratamiento(
	id_tratamiento INT NOT NULL AUTO_INCREMENT,
	id_paciente INT NOT NULL,
	detalle VARCHAR(4096),
	activo BOOL
);

ALTER TABLE tratamiento
ADD PRIMARY KEY (id_tratamiento);

ALTER TABLE tratamiento
ADD FOREIGN KEY (id_paciente) 
REFERENCES paciente(id_paciente);

CREATE TABLE medicina(
	id_medicina INT NOT NULL AUTO_INCREMENT,
	id_tratamiento INT NOT NULL,
	nombre VARCHAR(512),
	dosis  VARCHAR(512),
	detalle VARCHAR(4096),
	fecha DATETIME,
	fechaFin DATETIME,
	activo BOOL
);

ALTER TABLE medicina
ADD PRIMARY KEY (id_medicina);

ALTER TABLE medicina
ADD FOREIGN KEY (id_tratamiento) 
REFERENCES tratamiento(id_tratamiento);

CREATE TABLE tratamientoFisico(
	id_tratamiento_fisico INT NOT NULL AUTO_INCREMENT,
	id_tratamiento INT NOT NULL,
	detalle VARCHAR(4096),
	activo BOOL
);

ALTER TABLE tratamientoFisico
ADD PRIMARY KEY (id_tratamiento_fisico);

ALTER TABLE tratamientoFisico
ADD FOREIGN KEY (id_tratamiento) 
REFERENCES tratamiento(id_tratamiento);