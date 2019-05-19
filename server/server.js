// DEPENDANCE
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const http = require('http');
const models = require('./api/models/config');
const routesApi = require('./api/routes/route');

var app = express();

// PASSPORT
require('./api/config/passport');
app.use(passport.initialize());
app.use(passport.session());

// BODY PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Cache-Control");
    if (req.method === 'OPTIONS') {
     res.statusCode = 204;
     return res.end();
   } else {
     return next();
   }
 });

// ROUTES
app.use('/api', routesApi);

// ERREUR 404
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// ERREUR AUTORISATION
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401);
        res.json({ 'message': err.name + ': ' + err.message });
    }
});

// AUTRE ERREUR
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

/**
 * PORT UTILISE PAR EXPRESS
 */
var port = 3000;
app.set('port', port);

/**
 * SERVEUR HTTP
 */
http.createServer(app).listen(3000);

/**
 * CREE AUTOMATIQUEMENT LE MODEL DANS LA BASE DE DONNEES
 */
models.sequelize.sync().then(function () {
});