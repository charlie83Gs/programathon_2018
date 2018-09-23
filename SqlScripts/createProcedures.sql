
DROP PROCEDURE IF EXISTS spInsertarUsuario;

DELIMITER //

CREATE PROCEDURE spInsertarUsuario
(
	IN	pPassword_diggest VARCHAR(256),
	IN	pTelefono VARCHAR(40),
	IN	pNombre VARCHAR(40),
	IN	pCorreo VARCHAR(60),
	IN	pCedula VARCHAR(20)
)
BEGIN
	DECLARE result INT;
	IF NOT EXISTS (SELECT id_usuario FROM usuario WHERE  correo LIKE pCorreo) THEN
		INSERT INTO usuario(password_diggest,telefono,nombre,correo,cedula,activo)
		VALUES(pPassword_diggest,pTelefono,pNombre,pCorreo,pCedula,1);

		SET result = 1;
	ELSE
		SET result = 0;
	END IF;

	SELECT result;
END //

DELIMITER ;


DROP PROCEDURE IF EXISTS spInsertarEtnia;

DELIMITER //

CREATE PROCEDURE spInsertarEtnia(
	IN pNombre varchar(40)
)	

BEGIN
	INSERT INTO etnia(nombre)
	VALUES(pNombre);
END //

DELIMITER ;


DROP PROCEDURE IF EXISTS spInsertarPaciente;

DELIMITER //

CREATE PROCEDURE spInsertarPaciente
(
	IN pNombre VARCHAR(40),
	IN pId_usuario INT,
	IN pCedula VARCHAR(20),
	IN pEdad SMALLINT,
	IN pGenero VARCHAR(20),
	IN pParentesco VARCHAR(20),
	IN pId_etnia INT
)
BEGIN
	INSERT INTO paciente(nombre, id_usuario,cedula,edad,genero,id_etnia,parentesco,activo)
	VALUES(pNombre,pId_usuario,pCedula,pEdad,pGenero,pId_etnia,pParentesco,1);

END //

DELIMITER ;

DROP PROCEDURE IF EXISTS spInsertarEnfermedad;

DELIMITER //

CREATE PROCEDURE spInsertarEnfermedad
(
	IN pId_paciente INT,
	IN pDetalle VARCHAR(4096),
	IN pDate DATE
)
BEGIN
	INSERT INTO enfermedad(id_paciente,detalle,fecha,activo)
	VALUES(pId_paciente,pDetalle,pDate,1);

END //

DELIMITER ;

DROP PROCEDURE IF EXISTS spInsertarTratamiento;

DELIMITER //

CREATE PROCEDURE spInsertarTratamiento
(
	IN pId_paciente INT,
	IN pDetalle VARCHAR(4096),
	IN pDate DATE
)
BEGIN
	INSERT INTO tratamiento(id_paciente,detalle,fecha,activo)
	VALUES(pId_paciente,pDetalle,pDate,1);

END //

DELIMITER ;

DROP PROCEDURE IF EXISTS spInsertarMedicina;

DELIMITER //

CREATE PROCEDURE spInsertarMedicina
(
	IN pId_tratamiento INT,
	IN pNombre VARCHAR(512),
	IN pDosis  VARCHAR(512),
	IN pDetalle VARCHAR(4096),
	IN pFecha DATETIME,
	IN pFechaFin DATETIME
)
BEGIN
	INSERT INTO medicina(id_tratamiento,nombre,dosis,detalle,fecha,fechaFin,activo)
	VALUES(pId_tratamiento,pNombre,pDosis,pDetalle,pFecha,pFechaFin,1);

END //

DELIMITER ;

DROP PROCEDURE IF EXISTS spInsertarTratamientoFisico;

DELIMITER //

CREATE PROCEDURE spInsertarTratamientoFisico(
	pId_tratamiento INT,
	pDetalle VARCHAR(4096)
)
BEGIN
	INSERT INTO tratamientoFisico(id_tratamiento,detalle,activo)
	VALUES(pId_tratamiento,pDetalle,1);

END //

DELIMITER ;


