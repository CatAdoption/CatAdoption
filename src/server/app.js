var express = require('express');
var app = express();
app.use(express.json());
app.use(express.static('build'));
module.exports = app;