const express = require('express');
const songController = require('../controller/songController');

const router = express.Router();

router.get('/', songController.getSongs);

module.exports = router;