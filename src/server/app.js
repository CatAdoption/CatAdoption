var express = require('express');
var router = require('./CatsRouter');
var cors = require('cors');
var app = express();
app.use(cors())

app.use(express.json());
app.use('/', router);
module.exports = app;