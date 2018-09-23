CALL spInsertarUsuario('12345',
						'63387898',
						'Charlie',
						'carlosgomezsoza@gmail.com',
						'116660442',
						@valid
);

SELECT @valid;

CALL spInsertarUsuario('peda',
						'888888888',
						'Randall',
						'rdm23@gmail.com',
						'pedapedapeda',
						@valid
);

CALL spInsertarPaciente(
	'Bryan',
    
	1,
	'11111111',
	20,
	'Hombre',
    'hijo',
	1
	);



CALL spInsertarEnfermedad(
	1,
	'Fuerte Gripe',
	'2018-01-01'
);

CALL spInsertarTratamiento(
	1,
	'jarabe',
	'2018-01-01'
);

CALL spInsertarMedicina(
	1,
	'jarabe',
	'5 gramos',
	'jarabe para la tos',
	'2018-01-01',
	'2018-05-05'
	);

CALL spInsertarTratamientoFisico(1, 'masage de espalda con unhuento');
	
call spValidarUsuario('Charlie', '12l345');
