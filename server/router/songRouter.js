const express = require('express');
const songController = require('../controller/songController');

const router = express.Router();

router.get('/', songController.getSongs);
router.get('/playlist/:uid', songController.getPlaylist);
router.post('/addsongsinplaylist', songController.addSongsInPlaylist);
router.delete('/deletMySong/:uid/:sid',songController.deleteSong);

module.exports = router;