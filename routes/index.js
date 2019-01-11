var express = require('express');
var router = express.Router();
var monk = require('monk');  //get the monk javascript
var moment = require('moment'); //get the moment data
var dbs = monk('localhost:27017/3dclikx'); //connect the data base
var login = dbs.get('user'); // user login/signup collection

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/login',function(req, res, next){
	res.render('login');
});

module.exports = router;
