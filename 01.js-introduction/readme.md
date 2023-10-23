# javaScript Introduction 

**JavaScript is the programming language of the web. The overwhelming
majority of websites use JavaScript, and all modern web browsers on
desktops, tablets, and phones—include JavaScript interpreters, making
JavaScript the most-deployed programming language in history. Over
the last decade, Node.js has enabled JavaScript programming outside
of web browsers, and the dramatic success of Node means that
JavaScript is now also the most-used programming language among
software developers. Whether you’re starting from scratch or are
already using JavaScript professionally, this book will help you master
the language.**

# Template File

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Template Page</title>
</head>
<body>
<div id="root"></div>

    
    



    <script src="app.js"></script>
</body>
</html>
```





## Example

```
console.log("Welcome to Object In Javascript");
//let hello = [] 0 to n
let data = [101, 102, 103, 104, 105, 106];
let dataNest = [101, ["Hello", "Welcome", "Ducat"], 102, 103, 104, 105, 106];
let arrMix = [[201], [301], [401], [501]];
// console.log(arrMix);
// console.log(dataNest);
// key name 
let key = { "id": 101, "name": "Punit", "course": "React", "time": "4:30Pm" };
let tech = key;
console.log(tech.id);
let masterKey = {
    data: [[0], [1], [2], [3], [4], [5]],
    name: [["user1"], ["user2"]]
};
// as a developer
// let master = {};
let master = new Object();
master.name = "Punit 123";
master.email = "hello@techpunit.com";
console.log(master);
// console.log(data);
// console.log(key);
// console.log(key.id);
document.getElementById('test').innerHTML = key.name;



```








