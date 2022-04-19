
// window.onload = function(){
//     document.getElementById('loginBtn').onclick = function(){
//     const uName = document.getElementById('uname').value;
//     const pass = document.getElementById('password').value;

//     if(uName == user.userName && pass == user.password){
//         location.href = "homePage.html";
//     }
//     else{
//         document.getElementById('eror').innerHTML = "User Name or Password is incorrect!"
//     }
// }
// }
window.onload = function(){
    document.getElementById('loginBtn').onclick = async function () {
        let result = await fetch('http://localhost:8000/users/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
               username: document.getElementById('uname').value,
               password: document.getElementById('password').value
            })
        }).then(res => res.json());
        console.log(result.username, result.password);
        if(result.username === username && result.password === password){
            window.location.href = "./client/homePage.html";
        }
        else{
            document.getElementById('eror').innerHTML = "User Name or password is incorrect!";
        }
        

        // document.getElementById('product-form').reset();
        // renderBook(result);
    }
}