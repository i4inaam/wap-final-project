const songs = [
    {id:150,
    title: "Blank Space",
    rdate: "8-2-2019",
    song: "./audio/music1.mp4",
},

{id:123,
    title: "Unstopable",
    rdate: "6-12-2019",
    song: "./audio/music2.mp4",
},

{id:256,
    title: "Safari",
    rdate: "22-12-2019",
    song: "./audio/music3.mp4",
},

{id:452,
    title: "Let me down",
    rdate: "16-10-2019",
    song: "./audio/music4.mp4",
},

{id:450,
    title: "Strangers",
    rdate: "1-2-2022",
    song: "./audio/music5.mp4",
},

];

let playlist = [{
    uid:3,
    id:450,
    title: "Strangers",
    rdate: "1-2-2022",
    song: "./audio/music5.mp4",
},
{
    uid:3,
    id:455,
    title: "Strangers",
    rdate: "1-2-2022",
    song: "./audio/music5.mp4",
}];

module.exports = class Song{

    static getAllSongs(){
        return songs;
    }

    static getMyPlaylist(userid){
console.log(userid);
        const myList = playlist.filter(item => item.uid == userid);
console.log(myList);
        return myList;
    }

    static addSongInPlaylist(request){
        const index = playlist.findIndex(s => s.uid == request.uid && s.id == request.id );
        if(index < 0){
            const findSong = songs.find(s => s.id == request.id);
            playlist.push({uid : request.uid, id : findSong.id,
            title : findSong.title, rdate : findSong.rdate,
            song : findSong.song});
        }
    }

    static deleteSongById(uid, sid){
        playlist = playlist.filter(s => s.uid == uid && s.id != sid);
    }
    
}