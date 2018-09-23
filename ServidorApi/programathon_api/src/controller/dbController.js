var mysql = require('mysql');
var constants = require('../component/constants.js');




//multiple parameter function
mysql.createConnection({multipleStatements: true});

 var createConnection = function(){
 	return mysql.createConnection({
   host     : constants.BDHOST,
   user     : constants.BDUSERNAME,
   password : constants.BDPASSWORD,
   database : constants.BDNAME
 	});
}

var connect = function(connection) {
	 connection.connect(function(err){
	 if(!err) {
	     console.log("Database is connected ... \n\n");  
	 } else {
	     console.log("Error connecting database ... \n\n");  
	 }
	 });


}

module.exports.validateUser = function(username, password, callback) {
	let connection = createConnection();
	let sql = 'CALL spValidarUsuario( ?, ?)';
	result = false;
	connect(connection);
	connection.query(sql, [username,password], function(err, rows,fields) {
		if(err) {
	     console.log(err);  
	 	}else{
	 		callback(rows[0][0].result == "1");
	 		console.log(username + " login : "+ (rows[0][0].result == "1"));
	 	}
	 	connection.end();
	});
	
	}

module.exports.validateUserCorreo = function(correo, password, callback) {
	let connection = createConnection();
	let sql = 'CALL spValidarUsuarioCorreo( ?, ?)';
	result = false;
	connect(connection);
	connection.query(sql, [correo,password], function(err, rows,fields) {
		if(err) {
	     console.log(err);  
	 	}else{
	 		callback(rows[0][0].result == "1");
	 		console.log(correo + " login : "+ (rows[0][0].result == "1"));
	 	}
	 	connection.end();
	});
	
	}

module.exports.getUserId = function(correo, callback) {
	let connection = createConnection();
	console.log("getting id");
	let sql = 'CALL spGetUserIdCorreo(?)';
	result = false;
	connect(connection);
	connection.query(sql, correo, function(err, rows,fields) {
		if(err) {
	     console.log(err);  
	 	}else{
		//console.log(rows);
		callback(rows[0][0].id_usuario);
	 	connection.end();
	 	}
	});
	
	}
	

module.exports.insertUser = function(username, password,phone,correo,cedula, callback) {
	let connection = createConnection();
	let sql = 'CALL spInsertarUsuario(?,?,?,?,?)';
	result = false;
	connect(connection);
	connection.query(sql, [password,phone,username,correo,cedula], function(err, rows,fields) {
	 	if(err) {
	     console.log(err);  
	 	}else{
		//console.log(rows);
		callback(rows[0][0].result == "1");
	 	connection.end();
	 	}
	});
	
	}

module.exports.getAmountPacientes = function(id_usuario, callback) {
	let connection = createConnection();
	console.log("getting id");
	let sql = 'CALL spGetPacientAmount(?)';
	connect(connection);
	connection.query(sql,id_usuario, function(err, rows,fields) {
		if(err) {
	     console.log(err);  
	 	}else{
		//console.log(rows);
		callback(rows[0][0].pacients);
	 	connection.end();
	 	}
	});
	
	}
	
module.exports.insertPacient = function(name,id_usuario,cedula,edad,genero,parentesco,id_etnia,callback) {
	let connection = createConnection();
	let sql = 'CALL spInsertarPaciente(?,?,?,?,?,?,?)';
	result = false;
	connect(connection);
	connection.query(sql, [name,id_usuario,cedula,edad,genero,parentesco,id_etnia], function(err, rows,fields) {
	 	if(err) {
	     console.log(err);  
	 	}else{
		console.log(rows);

	 	connection.end();
	 	}
	});
	
	}
	
module.exports.insertTratamiento = function(id_paciente,detalle,fecha,callback) {
	let connection = createConnection();
	let sql = 'CALL spInsertarTratamiento(?,?,?)';
	result = false;
	connect(connection);
	connection.query(sql, [id_paciente,detalle,fecha], function(err, rows,fields) {
	 	if(err) {
	     console.log(err);  
	 	}else{
		//console.log(rows);
	 	connection.end();
	 	}
	});
	
	}


module.exports.insertarMedicina = function(id_tratamiento,nombre,dosis,detalle,fecha,fechaFin,callback) {
	let connection = createConnection();
	let sql = 'CALL spInsertarMedicina(?,?,?,?,?,?)';
	result = false;
	connect(connection);
	connection.query(sql, [id_tratamiento,nombre,dosis,detalle,fecha,fechaFin], function(err, rows,fields) {
	 	if(err) {
	     console.log(err);  
	 	}else{
		//console.log(rows);
	 	connection.end();
	 	}
	});
	
	}


module.exports.insertarTratamientoFisico = function(id_tratamiento,detalle,callback) {
	let connection = createConnection();
	let sql = 'CALL spInsertarTratamientoFisico(?,?)';
	result = false;
	connect(connection);
	connection.query(sql, [id_tratamiento,detalle], function(err, rows,fields) {
	 	if(err) {
	     console.log(err);  
	 	}else{
		//console.log(rows);
	 	connection.end();
	 	}
	});
	
	}

module.exports.getEtnias = function(callback){
	let connection = createConnection();
	//console.log("getting Etnias");
	let sql = 'CALL spGetEtnias()';
	result = false;
	connect(connection);
	connection.query(sql, function(err, rows,fields) {
		if(err) {
	     console.log(err);  
	 	}else{
	 	result = [];
	 	for(let i = 0 ;i < rows[0].length; i++){
	 		result.push(rows[0][i].nombre);
	 		//console.log(rows[0][i].nombre);
	 	}
		
		callback(result);
	 	connection.end();
	 	}
	});
	
	}