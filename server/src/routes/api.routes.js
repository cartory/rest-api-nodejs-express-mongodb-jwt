//  REQUIRES
const { Router } = require('express');
const router = Router();

//  COTROLLERS
const authController = require('../controllers/auth.controller');
const roleController = require('../controllers/role.controller');
//  MIDDLEWARES
const auth = require('../middlewares/auth.middleware');

//  ROUTES
router  
    //  USER ROUTES
    .post('/signup',    authController.register)
    .post('/signin',    authController.login)
    .get('/me',         auth.verifyToken, authController.profile)
    //  ROLE ROUTES
    .get('/roles',          roleController.all)
    .get('/roles/:id',      roleController.find)
    .post('/roles',         roleController.store)
    .put('/roles/:id',      roleController.update)
    .delete('/roles/:id',   roleController.destroy);

module.exports = router;