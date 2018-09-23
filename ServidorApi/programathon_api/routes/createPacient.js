var express = require('express');
var router = express.Router();
var db = require('../src/controller/dbController.js');
/* GET home page. */


router.get('/', function(req, res, next) {
	let name = req.query.username;
	let phone = req.query.phone;
	let cedula = req.query.cedula;
	let edad = req.query.edad;
	let parentesco = req.query.parentesco;
	let genero = req.query.genero;
	let etnia = req.query.etnia;
	//console.log(user+phone+cedula+genero+etnia);
	if(name !== undefined && genero !== undefined && phone !== undefined && cedula !== undefined && etnia !== undefined && edad !== undefined && parentesco !== undefined){
		db.getAmountPacientes(req.session.user.id_usuario, function(result){
			if(result < 5){
				db.insertPacient(name,req.session.user.id_usuario,cedula,edad,genero,parentesco,1,function(){});
			}
			console.log("pacient amount: " + result);
		});
		res.send({valid : true});
	}else{
		res.send({valid : false});
	}
});

module.exports = router;

