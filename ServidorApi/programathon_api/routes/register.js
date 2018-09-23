var express = require('express');
var router = express.Router();
var db = require('../src/controller/dbController.js');
/* GET home page. */


router.get('/', function(req, res, next) {
	let user = req.query.username;
	let pass = req.query.password;
	let phone = req.query.phone;
	let correo = req.query.correo;
	let cedula = req.query.cedula;
	if(user !== undefined && pass !== undefined && phone !== undefined && correo !== undefined && cedula !== undefined){
			db.insertUser(user,pass,phone,correo,cedula,function(result){
			if(result){
				res.send({valid : true});	
			}else{
				res.send({valid : false});
			}
		});
	}else{
		res.send({valid : false});
	}
});

module.exports = router;

