const express = require('express');
const router = express.Router();
const profileRouter = require('./profile');
const authController = require('./signIn');
router.use('/profile', profileRouter);
router.use('/auth',authController);

module.exports = router;
   
