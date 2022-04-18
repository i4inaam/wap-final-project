
window.onload = function(){
    document.getElementById('loginBtn').onclick = function(){
    const uName = document.getElementById('uname').value;
    const pass = document.getElementById('password').value;

    if(uName == user.userName && pass == user.password){
        location.href = "homePage.html";
    }
    else{
        document.getElementById('eror').innerHTML = "User Name or Password is incorrect!"
    }
}
}
