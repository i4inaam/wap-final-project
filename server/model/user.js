const { use } = require("../router/userRouter");

let users = [{
    "uid" : 1,
    "username" : "saim32",
    "password" : "789456"
},
{
    "uid" : 2,
    "username" : "inaam32",
    "password" : "613821"
}
];

module.exports = class User{
    
    static findUser(user){
        const index = users.findIndex (u => u.username == user.username && u.password == user.password); 
       if( index > -1){

        return {token: users[index].username + Date.now(), user:users[index]};
       }
       else{
       return null;
       }
    }

}