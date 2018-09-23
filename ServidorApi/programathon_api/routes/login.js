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
		if(result){		
			db.getUserId(user, function(id_usuario){
				//console.log(id_usuario);
				res.send({valid : true, id : id_usuario});
				
			});

		}else{
			res.send({valid : false, id : - 1 });
		}
	});
	}else{

		res.send({valid : false, id: -1});
	}

});

module.exports = router;
