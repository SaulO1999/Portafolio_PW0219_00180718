var express = require('express');
var router = express.Router();
var watchController = require('../controllers/WatchControllers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'hello' });
});

router.post('/:modelo', function(req,res,next) {
  watchController.register;
  res.render('index', {title: 'Express'});
});
//router.post('/',watchController.register);

module.exports = router;
