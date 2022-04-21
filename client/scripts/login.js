function disableBack() { window.history.forward(); }
setTimeout("disableBack()", 0);

window.onload = function(){


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
            sessionStorage.setItem('result', JSON.stringify(result));
            window.location.href = "./client/homePage.html";
        }
        else{
            document.getElementById('eror').innerHTML = "User Name or password is incorrect!";
        }
    }
}
    
    