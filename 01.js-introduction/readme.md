# javaScript Introduction 


- What is JavaScript?
- History and evolution
- JavaScript vs Java
- JavaScript engines
- ECMAScript
- Where JavaScript is used
- Browser vs server-side JavaScript
- Setting up VS Code
- Browser DevTools
- Running JavaScript with Node.js

---
> Goal: Build a strong programming foundation.
---



# Template File

```html
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
## request and responce = app


```javascript
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








