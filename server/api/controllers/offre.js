var models = require('../models/config.js');
var express = require('express');
var router = express.Router();

router.get('/get/all', function (req, res, next) {
    models.sequelize.query('SELECT OffreID, Sujet, NomSociete, AdresseSociete, AdresseElectroniqueContact, TelephoneContact, Type FROM Offres ',
        { type: models.sequelize.QueryTypes.SELECT })
        .then(result => {
            console.log(result);
            res.json(result);
        })
        .catch(function (error) {
            console.log(error);
            res.status(401).send({ message: error });
        });
});

router.get('/get/offreByID/:offreID', function (req, res, next) {
    models.sequelize.query('SELECT OffreID, Sujet, NomSociete, AdresseSociete, AdresseElectroniqueContact, TelephoneContact, Type FROM Offres ' + 
        'WHERE OffreID = \'' + req.params.offreID + '\'',
        { type: models.sequelize.QueryTypes.SELECT })
        .then(result => {
            console.log(result);
            res.json(result);
        })
        .catch(function (error) {
            console.log(error);
            res.status(401).send({ message: error });
        });
});

router.post('/create', function (req, res, next) {
    models.Offre.create({
        Sujet: req.body.Sujet,
        NomSociete: req.body.NomSociete,
        AdresseSociete: req.body.AdresseSociete,
        AdresseElectroniqueContact: req.body.AdresseElectroniqueContact,
        TelephoneContact: req.body.TelephoneContact,
        Type: req.body.Type
    }).then(result => res.status(200).json(result))
        .catch(function (error) {
            console.log(error);
            res.status(401).send({ message: error });
        });
});

module.exports = router;