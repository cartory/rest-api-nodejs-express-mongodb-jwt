//  REQUIRES
const { Router } = require('express');
const router = Router();

//  COTROLLERS
const userController = require('../controllers/user.controller');
const roleController = require('../controllers/role.controller');

//  MIDDLEWARES
const auth = require('../middlewares/auth.middleware');

//  ROUTES
router  
    //  USER ROUTES
    .get('/users',      userController.all)
    .get('/users/:id',  userController.find)
    .post('/signup',    userController.register)
    .post('/signin',    auth.verifyLogin, userController.login)
    .get('/me',         auth.verifyToken, userController.profile)
    //  ROLE ROUTES
    .get('/roles',          roleController.all)
    .get('/roles/:id',      roleController.find)
    .post('/roles',         roleController.store)
    .put('/roles/:id',      roleController.update)
    .delete('/roles/:id',   roleController.destroy);

module.exports = router;