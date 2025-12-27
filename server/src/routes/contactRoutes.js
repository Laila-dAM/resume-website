const express = require('express');
const router = express.Router();
const { saveMessage } = require('../controllers/contactController');

router.post('/submit', saveMessage);

module.exports = router;
