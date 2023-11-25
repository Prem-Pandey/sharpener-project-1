const express = require('express');

const router = express.Router();
const success = require('../controllers/successMessage');
router.get('/', success.successMessage);
module.exports = router;