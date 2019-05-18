var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');

const routesApi = require('./api/routes/index');
var app = express();

// Passport pour l'authentification
require('./api/config/passport');
app.use(passport.initialize());
app.use(passport.session());

// Bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Routes
app.use('/api', routesApi);

module.exports = app;
