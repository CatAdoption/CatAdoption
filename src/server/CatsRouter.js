var CatsRouter= require('express').Router();
var CatsController = require('./CatsController');

// Create route handlers for each of the methods in CatsController
// CatsRouter.post('/', CatsController.createOne);
// CatsRouter.get('/', CatsController.retrieve);


module.exports = CatsRouter;