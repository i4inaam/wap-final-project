const Song = require('../model/song');

exports.getSongs = (req, res, next) => {
    res.status(200).json(Song.getAllSongs());
} 