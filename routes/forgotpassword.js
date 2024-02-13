const express = require('express');

const resetpasswordController = require('../controllers/resetpassword.controller');
const router = express.Router();

router.get('/updatepassword/:resetpasswordid', resetpasswordController.updatepassword)
router.get('/resetpassword/:id', resetpasswordController.resetpassword)
router.use('/forgotpassword', resetpasswordController.forgotPassword)

module.exports = router;