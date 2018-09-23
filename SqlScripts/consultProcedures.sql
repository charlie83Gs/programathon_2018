

DROP PROCEDURE IF EXISTS spGetUserId;

DELIMITER //

CREATE PROCEDURE spGetUserId
(
	IN	pNombre VARCHAR(40)
)
BEGIN
	SELECT id_usuario FROM usuario WHERE pNombre LIKE nombre LIMIT 1;

END //

DELIMITER ;

DROP PROCEDURE IF EXISTS spGetPacientAmount;

DELIMITER //

CREATE PROCEDURE spGetPacientAmount
(
	IN	pId_usuario INT
)
BEGIN
	SELECT COUNT(id_paciente) AS pacients FROM paciente WHERE pId_usuario = id_usuario;

END //

DELIMITER ;