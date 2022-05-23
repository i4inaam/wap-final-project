function disableBack() { window.history.forward(); }
setTimeout("disableBack()", 0);

window.onload = function() {

    const auth = JSON.parse(sessionStorage.getItem("result"));
    document.getElementById('logedinuser').innerText = "Welcome " + auth.user.username;

    //fetching all songs on window loading
    async function getSongs(){
        const result = await fetch('http://localhost:8000/songs/',{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            }
        }).then(res => res.json());
        
        let rows = "";
         for(let i = 0; i < result.length; ++i){
            rows += `<tr>
            <td>`+ result[i].id + `</td>
            <td>`+ result[i].title + `</td>
            <td>`+ result[i].rdate + `</td>
            <td><button id=\"add`+ result[i].id +`\">Add</button></td>
            </tr>`;
         }
        document.getElementById('tab1body').innerHTML = rows;

        for(let i = 0; i < result.length; ++i){
            const addElement = document.getElementById("add"+result[i].id);
            addElement.addEventListener('click', function(event) {
               saveSong(auth.user.uid, result[i].id);
               getPlaylist(auth.user.uid);
            })

        }
        return result;
    }
    getSongs();
    /*************************************************************/

    //Add Song Function
    async function saveSong(userId, songId){
        await fetch('http://localhost:8000/songs/addsongsinplaylist',{
            method: 'POST',
            headers: { 'Content-type': 'application/json'},
            body: JSON.stringify({
                uid : userId,
                id : songId
            })

        }).then(res => res.json());
    }
    /*************************************************************/

    //Fetching Playlist
    async function getPlaylist(userid){
        const playlistArray = await fetch('http://localhost:8000/songs/playlist/'+userid,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            }
        }).then(res => res.json());

        let rowsPlaylist = "";
        if(playlistArray.length === 0){
            rowsPlaylist = `<tr><td colspan="3">There is nothing in the Playlist.</td></tr>`;
        }
        else{
            for(let i = 0; i < playlistArray.length; ++i){
                rowsPlaylist += `<tr>
                <td>` + playlistArray[i].id + `</td>
                <td>` + playlistArray[i].title + `</td>
                <td>
                    <button id="remove` + playlistArray[i].id + `">Remove</button>
                    <button id="play` + playlistArray[i].id + `">Play</button>
                </td>
            </tr>`; 
            }  
        }
        document.getElementById('tab2body').innerHTML = rowsPlaylist; 

        for(let i = 0; i < playlistArray.length; ++i){
            const removeElement = document.getElementById("remove" + playlistArray[i].id);
            const playElement = document.getElementById("play" + playlistArray[i].id);
            removeElement.addEventListener('click', function(event) {
                deleteSong(auth.user.uid, playlistArray[i].id);
                getPlaylist(auth.user.uid);
             });
             playElement.addEventListener('click', function(event) {
                document.getElementById('currentSong').innerHTML = "Currently playing " + playlistArray[i].title;
                document.getElementById("musicplayer").style.display = "block";
                document.getElementById("musicplayer").src=playlistArray[i].song;
             });
        }
    }
    getPlaylist(auth.user.uid);
    /*************************************************************/

    //Search function
        document.getElementById('searchBtn').onclick = async function(){
        const str = document.getElementById('search').value;
        
        const arr = await getSongs();
        const songArray = arr.filter(s=> s.title.toLowerCase().includes(str.toLowerCase()));
    
       if(songArray.length == 0 || str == null){
           document.getElementById('cap1').innerHTML = "Sorry! there is no song realted to \"" + str + "\"";
           document.getElementById('cap1').style.color = "red";
           document.getElementById('tab1body').innerHTML = "";
       }
       else
       {
        document.getElementById('cap1').innerHTML = "Result for \"" + str + "\"";
        document.getElementById('cap1').style.color = "green";
        let rows = "";
        for(let i = 0; i < songArray.length; ++i){
           rows += `<tr>
           <td>`+ songArray[i].id + `</td>
           <td>`+ songArray[i].title + `</td>
           <td>`+ songArray[i].rdate + `</td>
           <td><button id=\"add`+ songArray[i].id +`\">Add</button></td>
           </tr>`;
        }
       document.getElementById('tab1body').innerHTML = rows;

       for(let i = 0; i < songArray.length; ++i)
       {
        const addElement = document.getElementById("add"+songArray[i].id);
        addElement.addEventListener('click', function(event) {
           saveSong(auth.user.uid, songArray[i].id);
           getPlaylist(auth.user.uid);
        })

    }
       }
    }
    /*************************************************************/

     //Logout Function 
     document.getElementById('logoutBtn').onclick = async function(){
        sessionStorage.removeItem("result");
        window.location.href = "../index.html";
     }
     /*************************************************************/

     //Remove Song By ID
     async function deleteSong(userId, songId){
        await fetch('http://localhost:8000/songs/deletMySong/'+ userId +'/'+ songId,{
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',  
            },
            body: JSON.stringify({
                uid : userId,
                id : songId
            })

        }).then(res => res.json());
    }
     /*************************************************************/

    
}