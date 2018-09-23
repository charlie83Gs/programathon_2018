

DROP PROCEDURE IF EXISTS spValidarUsuario;

DELIMITER //

CREATE PROCEDURE spValidarUsuario
(
	IN	pNombre VARCHAR(40),
	IN	pPassword_diggest VARCHAR(256)
)
BEGIN
	DECLARE  result INT;
	IF EXISTS (SELECT nombre FROM usuario WHERE pCorreo LIKE correo AND pPassword_diggest LIKE password_diggest) THEN
		SELECT id_usuario AS result FROM usuario where pCorreo Like correo AND pPassword_diggest LIKE password_diggest LIMIT 1;
	ELSE
		SET result = 0;
		SELECT result;
	END IF;
END //

DELIMITER ;




DROP PROCEDURE IF EXISTS spValidarUsuarioCorreo;

DELIMITER //

CREATE PROCEDURE spValidarUsuarioCorreo
(
	IN	pCorreo VARCHAR(40),
	IN	pPassword_diggest VARCHAR(256)
)
BEGIN
	DECLARE  result INT;
	IF EXISTS (SELECT nombre FROM usuario WHERE pCorreo LIKE correo AND pPassword_diggest LIKE password_diggest) THEN
		SET result = 1;
	ELSE
		SET result = 0;
	END IF;

	SELECT result;
END //

DELIMITER ;


