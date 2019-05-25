var express = require('express');
var router = express.Router();

// Controleur
var ctrlAuth = require('../controllers/authentification');
var ctrlUser = require('../controllers/user')
var ctrlOffre = require('../controllers/offre');

// Authentification
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

// Utilisateur
router.use('/user', ctrlUser);

// Offre
router.use('/offre', ctrlOffre);

module.exports = router;
