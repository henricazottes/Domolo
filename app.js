#!/usr/bin/env node

//imports
var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes.js');

//instantiate express
var app = express();

//config
app.use(bodyParser.json({}));

//use routes to map URLs to handlers
app.use('/', routes);

//catch 404 and forwarding to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
}); 

//set the application port
app.set('port', 3000);

//set the server
var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});
