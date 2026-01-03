// routes/userRouter.js
const router = require('express').Router();
const controller = require('../controllers/userController');

router.get('/', controller.findAll);

module.exports = router;
