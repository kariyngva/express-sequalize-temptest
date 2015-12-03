var models = require('../models');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/log/:temp', function (req, res, next) {
	models.Heat.create({
		temp: req.params.temp
	}).then(function () {
			res.render( 'index', { title:'Temp logger', temp:req.params.temp } );
	  });

});

module.exports = router;
