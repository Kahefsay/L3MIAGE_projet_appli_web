var models = require('../models/config.js');
var express = require('express');
var router = express.Router();

router.get('/get/all', function (req, res, next) {
    models.sequelize.query('SELECT QuestionID, Horodatage, Contenu, Reponse, UtilisateurID FROM Questions',
        { type: models.sequelize.QueryTypes.SELECT })
        .then(result => {
            res.json(result);
        })
        .catch(function (error) {
            console.log(error);
            res.status(401).send({ message: error });
        });
});

router.get('/get/allByUtilisateurID/:utilisateurID', function (req, res, next) {
    models.sequelize.query('SELECT QuestionID, Horodatage, Contenu, Reponse, UtilisateurID FROM Questions ' +
        'WHERE UtilisateurID = \'' + req.params.utilisateurID + '\'',
        { type: models.sequelize.QueryTypes.SELECT })
        .then(result => {
            res.json(result);
        })
        .catch(function (error) {
            console.log(error);
            res.status(401).send({ message: error });
        });
});

router.get('/get/questionByID/:questionID', function (req, res, next) {
    models.sequelize.query('SELECT QuestionID, Horodatage, Contenu, Reponse, UtilisateurID FROM Questions ' +
        'WHERE QuestionID = \'' + req.params.questionID + '\'',
        { type: models.sequelize.QueryTypes.SELECT })
        .then(result => {
            res.json(result);
        })
        .catch(function (error) {
            console.log(error);
            res.status(401).send({ message: error });
        });
});

router.post('/create', function (req, res, next) {
    models.Question.create({
        Contenu: req.body.Contenu,
        UtilisateurID: req.body.UtilisateurID
    }).then(result => res.status(200).json(result))
        .catch(function (error) {
            console.log(error);
            res.status(401).send({ message: error });
        });
});

router.post('/update', function (req, res, next) {
    models.Question.update(
        { Reponse: req.body.Reponse },
        { where: { QuestionID: req.body.QuestionID } }
    ).then(result => {
        console.log(result);
        res.json(result);
    }).catch(error => {
        console.log(error);
        res.status(401).send({ message: error });
    });

});

module.exports = router;