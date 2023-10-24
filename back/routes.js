const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const authController = require('./controllers/authController');
//Routes Auth
router.post('/users/login', authController.login);

//Routes User
router.post('/users/register', userController.createUser);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

//Routes Logout
router.post('/users/logout', authController.logout);


module.exports = router;