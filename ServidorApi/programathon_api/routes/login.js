var express = require('express');
var router = express.Router();
var db = require('../src/controller/dbController.js');
/* GET home page. */
router.get('/', function(req, res, next) {
	let user = req.query.correo;
	let pass = req.query.password; 
	if(user !== undefined && pass !== undefined){
		//console.log(req.params.username + "   " + req.params.password)
	db.validateUserCorreo(user,pass,function(result){
		req.session.user = {};
		if(result){
			req.session.user.valid = true;
			db.getUserId(user, function(id_usuario){
				req.session.user.id_usuario = id_usuario;
				res.send({valid : result});
				//console.log("req " + req.session.user.id_usuario);
			});

		}else{
			req.session.user.valid = false;
			res.send({valid : false});
		}
		
	});
	}else{
		req.session.valid = false;
		res.send({valid : false});
	}

});

module.exports = router;
