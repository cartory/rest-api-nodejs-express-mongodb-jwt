//  REQUIRES
const { Router } = require('express');
const router = Router();

//  COTROLLERS
const authController = require('../controllers/auth.controller');

//  MIDDLEWARES
const auth = require('../middleware/auth.middleware');

//  ROUTES
router  //  USER ROUTES
    .post('/signup',    authController.register)
    .post('/signin',    authController.login)
    .get('/me', auth.verifyToken, authController.profile);


module.exports = router;