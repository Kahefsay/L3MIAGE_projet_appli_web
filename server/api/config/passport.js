const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mycrypto = require('crypto');

let validPassword = function(password, hash, salt) {
    var tmp = mycrypto.pbkdf2Sync("K,BR7,ix462&Nq{g" + password + "m2tjSE2.P]6#7h$Y", salt, 1000, 64, 'sha512').toString('hex');
    return hash === tmp;
};

passport.use(new LocalStrategy({
    usernameField: 'email',
},
    function(email, password, done) {
        console.log(email);
        console.log(password);
        var models = require('../models/config.js');

        models.Utilisateur.findOne({
            where: {AdresseElectronique: email}
        }).then(user => {
            if (user == null || user == undefined) {
                return done(null, false, {message: 'L\'utilisateur n\'existe pas'});
            }
            else if (!validPassword(password, user.PasswordHash, user.Salt)) {
                return done(null, false, {message: 'Mot de passe incorrect'});
            }
            return done(null, user);
        }).catch(err => {
            console.log(err);
            return done(null, false, {message: err});
        })
    }
));


