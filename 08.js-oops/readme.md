# JS And ES6 Module

```
class Application {
    // gobal variable type
    name = "Ducat India";
    //method

    constructor() {
        console.log("Hello Devloper");
    }
    hello() {
        return "Hello In Method of Application";
    }
    // hello();
}

let app = new Application;


console.log(app);
console.log(app.name);
console.log(app.hello());

```

**A module is a self-contained unit of code that can be reused and imported into other programs. Modules help to organize code and avoid naming conflicts by keeping variables and functions local to the module.**

# ES6 module approach.

## 1.User Module

```
export let name = "Developer";
export function hello()
{
    console.log("Hello");
}
```

## 2.App Module

```
import { name } from './module/user.js';
console.log(name);
```

## 3.Template Module

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tech Punit | Js Application</title>
</head>
<body>
    <div id="root"></div>
<script src="./app.js" type="module"></script>
</body>
</html>
```


