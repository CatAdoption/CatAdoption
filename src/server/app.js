var express = require('express');
var router = require('./CatsRouter');
var app = express();
app.use(express.json());
app.use(express.static('build'));
app.use('/', router);
module.exports = app;