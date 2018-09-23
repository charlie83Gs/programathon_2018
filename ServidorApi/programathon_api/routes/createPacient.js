var express = require('express');
var router = express.Router();
var db = require('../src/controller/dbController.js');
/* GET home page. */


router.get('/', function(req, res, next) {
	let name = req.query.username;
	let cedula = req.query.cedula;
	let edad = req.query.edad;
	let parentesco = req.query.parentesco;
	let genero = req.query.genero;
	let etnia = req.query.etnia;
	let user_id = req.query.user_id;

	if(user_id !== undefined && name !== undefined && genero !== undefined && cedula !== undefined && etnia !== undefined && edad !== undefined && parentesco !== undefined){

		db.getAmountPacientes(user_id, function(result){
			if(result < 5){
				db.insertPacient(name,user_id,cedula,edad,genero,parentesco,1,function(){});
				res.send({valid : true, total_children : result});
			}else{
				res.send({valid : false, total_children : result});
			}
			console.log("pacient amount: " + result);
		});
		
	}else{
		res.send({valid : false, total_children : -1});
	}
});

module.exports = router;

