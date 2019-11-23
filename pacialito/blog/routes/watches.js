var express = require('express');
var router = express.Router();
var watchController = require('../controllers/WatchControllers');

router.get('/:modelo', watchController.getOne);
router.get('/', watchController.getAll);

router.post('/',watchController.register);
router.put('/:modelo', watchController.updateWatch);
router.delete('/:modelo',watchController.delete);

module.exports = router;