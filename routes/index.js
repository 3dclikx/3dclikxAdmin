var express = require('express');
var router = express.Router();
var monk = require('monk');  //get the monk javascript
var moment = require('moment'); //get the moment data
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/login',function(req, res, next){
	res.render('login');
});

module.exports = router;
