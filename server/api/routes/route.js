var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');

var ctrlAuth = require('../controllers/authentification');
var ctrlUser = require('../controllers/user')

// Authentification
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

// Utilisateur
router.use('/user', ctrlUser);

module.exports = router;
