var express = require('express');
var router = express.Router();
var db = require('../src/controller/dbController.js');
/* GET home page. */
router.get('/', function(req, res, next) {
	db.getEtnias(function(result){
		//console.log(result);
		res.send({etnias : result});
	});

});

module.exports = router;