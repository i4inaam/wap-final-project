const { use } = require("../router/userRouter");

let users = [{
    "username" : "saim32",
    "password" : "789456"
},
{
    "username" : "inaam32",
    "password" : "613821"
}
];

module.exports = class User{
    
    static findUser(user){
        const index = users.findIndex (u => u.username == user.username && u.password == user.password); 
       if( index > -1){

        return users[index].username + Date.now();
       }
       else{
       return null;
       }
    }

}