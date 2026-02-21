const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/users', userController.createUser);
router.get('/getAllUsers', userController.getAllUsers);
router.put('/updateRecord/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;
