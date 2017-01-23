var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
// var ctrlLocations = require('../controllers/locations');
// var ctrlOthers = require('../controllers/others');

// var homepageController = function(req, res, next) {
//   res.render('index', { title: 'Express' });
// }

/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;
