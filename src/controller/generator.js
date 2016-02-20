var express = require('express');
var router = express.Router();
var sex = require('../models/sex').sex;


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

// define the home page route
router.get('/', function(req, res) {

    sex.findById(1).then(function(sexModel) {
        //console.log(user.name);
        res.send('this is the generator for ' + sexModel.type);
    });

});

// define the about route
router.get('/about', function(req, res) {
    res.send('About generators');
});

module.exports = router;