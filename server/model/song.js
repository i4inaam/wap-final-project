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

module.exports = class Song{

    static getAllSongs(){
        return songs;
    }
    
}