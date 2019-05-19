var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');

var ctrlAuth = require('../controllers/authentification');

// Authentification
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
