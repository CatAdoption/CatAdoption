var CatsRouter = require('express').Router();
var CatsController = require('./CatsController');
var UserController = require ('./UserController')

// Create route handlers for the required methods in CatsController
    CatsRouter.post('/Adopt', CatsController.create);
    CatsRouter.post('/Contact', CatsController.createContact);
    CatsRouter.post('/Volunteer', CatsController.createVolunteer);

    CatsRouter.post('/signUp', UserController.createUser);
    CatsRouter.post('/login', UserController.loginUser);
    // CatsRouter.post('/check', UserController.check);

    
module.exports = CatsRouter;