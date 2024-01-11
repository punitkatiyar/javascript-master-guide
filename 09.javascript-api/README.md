# javaScript API Integration 🏆

> The ECMAScript module system is a standardized way of organizing and structuring code in JavaScript applications.

> It allows developers to create reusable pieces of code (modules) that can be imported and used in other parts of their applications.

> ECMAScript modules were introduced as part of ECMAScript 6 (ES6) to address the need for a more scalable and modular approach.

## 1. Module Definition

> A module is a file that contains JavaScript code and may include variables, functions, classes, or any other JavaScript constructs.

> Each module has its own scope, which means that the variables and functions declared in a module are not automatically visible in other modules.
>

## 2. Export and Import Statements

> The export statement is used to explicitly export variables, functions, or classes from a module.

> The import statement is used to import exports from other modules.


```
// Exporting from a module
// File: myModule.js
export const variable1 = 'Some value';
export function function1() {
  // function1 logic
}

// Importing in another module
// File: AnotherModule.js
import { variable1, function1 } from './myModule';
```



## javaScript Fetch API

```
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json))
```

