var passport = require('passport');
var mycrypto2 = require('crypto');
var jwt = require('jsonwebtoken');
var models = require('../models/config.js');

var generateJwt = function (email) {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    return jwt.sign({
        AdresseElectronique: email,
        exp: (expiry.getTime() / 1000),
    }, 'secret');
};

module.exports.register = function (req, res) {

    var salt = mycrypto2.randomBytes(16).toString('hex');
    var hash = mycrypto2.pbkdf2Sync("K,BR7,ix462&Nq{g" + req.body.password + "m2tjSE2.P]6#7h$Y", salt, 1000, 64, 'sha512').toString('hex');

    models.Utilisateur.create({
        Nom: req.body.nom,
        Prenom: req.body.prenom,
        Adresse: req.body.adresse,
        AdresseElectronique: req.body.email,
        Telephone: req.body.tel,
        Salt: salt,
        PasswordHash: hash
    }).then(newUser => {
        console.log('Nouveau compte crée avec succès : ' + newUser.AdresseElectronique);
        res.status(200).send();
    }).catch(error => {
        console.log('Erreur à la création : ' + error);
        res.status(401).send();
    })
};

module.exports.login = function (req, res) {
    passport.authenticate('local', function (err, user, info) {
        var token;
        if (err) {
            res.status(404).json(err);
            return;
        }

        if (user) {
            user.PasswordHash = '';
            user.Salt = '';

            token = generateJwt(user.AdresseElectronique);

            models.Utilisateur.update(
                { JWT: token },
                { where: { AdresseElectronique: user.AdresseElectronique } }
            ).then(result => {
                res.status(200);
                res.json({
                    user: user,
                    token: token
                });
            }).catch(error => {
                console.log(error);
                res.status(200).send({message: error});
            });

        } else {
            res.status(401).send();
        }
    })(req, res);
};
