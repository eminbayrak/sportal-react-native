const router = require('express').Router();
const userController = require('../controllers/user');
const  {verifyUserToken, isAdmin, isUser} = require('../middleware/auth');

// Register
router.post('/register', userController.register);

// Login
router.post('/login', userController.login);

// Auth user
router.post('/events', verifyUserToken, isUser, userController.userEvent);

// Auth admin
router.post('/special', verifyUserToken, isAdmin, userController.adminEvent);

module.exports = router;