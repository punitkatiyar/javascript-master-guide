const user=["user@techbook.com",12345,"A0001"];

let userEmail="user@techbook.com";
let userPass="12345";

if(userEmail==""){
    res="Please Enter Email Id 🎟";
}
else if(userPass==""){
    res="Please Enter Password";
}

else{
    if(user[0]==userEmail & user[1]==userPass){
        res="Welcome";
    }
    else{
        res="Id Password Do Not Match";

    }
}
console.log(res);

