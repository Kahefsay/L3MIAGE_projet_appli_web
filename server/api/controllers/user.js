var models = require('../models/config.js');
var express = require('express');
var router = express.Router();

router.get('/get/userByAdresseElectronique/:AdresseElectronique', function (req, res, next) {
    var email = req.params.AdresseElectronique;

    models.sequelize.query('SELECT UtilisateurID, Nom, Prenom, Adresse, AdresseElectronique, Telephone, Role, JWT FROM Utilisateurs ' +
        'WHERE AdresseElectronique = \'' + email + '\'',
        { type: models.sequelize.QueryTypes.SELECT })
        .then(result => res.json(result))
        .catch(function (error) {
            console.log(error);
            res.status(401).send({ message: error });
        });
});

router.get('/get/allUserExceptCollaborateur', function (req, res, next) {
    models.sequelize.query('SELECT UtilisateurID, Nom, Prenom, AdresseElectronique, Telephone, Role FROM Utilisateurs ' +
        'WHERE Role <> \'COLLABORATEUR\'',
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

router.post('/update/role', function (req, res, next) {
    console.log(req.body);
    models.Utilisateur.update(
        { Role:  req.body.Role},
        { where: { UtilisateurID: req.body.UtilisateurID } }
    ).then(result => {
        console.log(result);
        res.json(result);
    }).catch(error => {
        console.log(error);
        res.status(401).send({ message: error });
    });

});

module.exports = router;