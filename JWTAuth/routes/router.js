const express = require('express');
const authenticateToken = require('../middleware/authenticate');
const authController = require('../controller/authController');
const ordersController = require('../controller/ordersController');

const router = express.Router();

router.post('/login', authController.login);

router.get('/orders', authenticateToken, ordersController.getOrders);

module.exports = router;