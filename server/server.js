var path = require('path');
var fs = require('fs');
var express = require('express');

// IMPORTS
var indexRoutes = require('./routes/index');

// CREATE APP
var app = express();

// VIEW ENGINE DEFINE
app.set('view engine', 'html'); // telling express how to return a file

//define how to handle html file
app.engine('html', function (path, options, callbacks) {
  fs.readFile(path, 'utf-8', callback);
});

// ROUTES
app.use('/', indexRoutes);

// Handle bundle.js -- return static files aka bundle.js
// MIDDLEWARE
app.use(express.static(path.join(__dirname, '../client')));

// ERROR HANDLING
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
});

// SERVE APP
module.exports = app;