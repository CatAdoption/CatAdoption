var CatsRouter= require('express').Router();
var CatsController = require('./CatsController');

// Create route handlers for the required methods in CatsController
 CatsRouter.post('/Adopt', CatsController.create);

module.exports = CatsRouter;