const Song = require('../model/song');

exports.getSongs = (req, res, next) => {
    res.status(200).json(Song.getAllSongs());
} 

exports.getPlaylist = (req, res, next) => {
    res.status(200).json(Song.getMyPlaylist(req.params.uid));
}

exports.addSongsInPlaylist = (req, res, next) => {
    res.status(200).json(Song.addSongInPlaylist(req.body));
}

exports.deleteSong =  (req, res, next) => {
    res.status(200).json(Song.deleteSongById(req.params.uid, req.params.sid));
}