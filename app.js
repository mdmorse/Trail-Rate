
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var indexController = require('./controllers/indexController.js');
var mongoose = require('mongoose');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// mongoose.connect('mongodb://localhost/trailrate');

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', indexController.home);
app.get('/trail',indexController.detail);
// app.get('/save', indexController.save);
app.post('/trail',indexController.create);







http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
