const path = require('path');
const express = require('express');
const contactController = require('../controllers/contactus')
const router = express.Router();

router.get('/', contactController.contactUsPage);
module.exports = router;
