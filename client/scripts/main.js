

window.onload = function() {

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
            <td><button id= \"` + result[i].id + `\">Add</button></td>
           <!--<td><audio controls><source src=" songArray[i].song  "></audio></td>-->
            </tr>`;
         }
        document.getElementById('tab1body').innerHTML = rows;
        return result;
    }
    getSongs();
    /*************************************************************/

     //Login Function
     document.getElementById('loginBtn').onclick = async function () {
        const username = document.getElementById('uname').value;
        const password = document.getElementById('password').value;
        let result = await fetch('http://localhost:8000/users/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({username, password})
        }).then(res => res.json());

        if(result){
            sessionStorage.setItem('result', result);
            window.location.href = "./client/homePage.html";
        }
        else{
            document.getElementById('eror').innerHTML = "User Name or password is incorrect!";
        }
    }
    /*************************************************************/

    //Search function
        document.getElementById('searchBtn').onclick = async function(){
        const str = document.getElementById('search').value;
        const arr = await getSongs();
        const songArray = arr.filter(s=> s.title.toLowerCase().includes(str.toLowerCase()));
    
       if(songArray.length == 0 || str == null){
           document.getElementById('cap1').innerHTML = "Sorry! there is no song realted to \"" + str + "\"";
           document.getElementById('tab1body').innerHTML = "";
       }
       else{
        document.getElementById('cap1').innerHTML = "Result for \"" + str + "\"";
        let rows = "";
        for(let i = 0; i < songArray.length; ++i){
           rows += `<tr>
           <td>`+ songArray[i].id + `</td>
           <td>`+ songArray[i].title + `</td>
           <td>`+ songArray[i].rdate + `</td>
           <td><button id= \"` + songArray[i].id + `\">Add</button></td>
           <!--<td><audio controls><source src=" songArray[i].song  "></audio></td>-->
           </tr>`;
        }
       document.getElementById('tab1body').innerHTML = rows;
       }
    }
    /*************************************************************/

    //Add in the Playlist
    document.getElementById('150').onclick = function(){
        document.getElementById('caption2').innerHTML = "hhhhhhhhhhhhhhh";
    }
    
}


