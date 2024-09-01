# ECMA Script  Module Integration 🏆

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

## 3.Default Exports

**A module can have a default export, which is the main export of the module. It is imported without using curly braces {} and can be given any name when imported.**

```
// Default export in a module
// File: myModule.js
const variable1 = 'Some value';
export default variable1;

// Importing the default export
// File: AnotherModule.js
import myVariable from './myModule';
```

## 4.Module Dependency Graph

**The ECMAScript module system relies on a module dependency graph to manage the relationships between modules. When one module depends on another, the module loader ensures that dependencies are loaded and executed in the correct order.**

## 5.Asynchronous Loading

**Modules are loaded asynchronously, which can improve the performance of web applications. This is in contrast to the CommonJS module system, where modules are loaded synchronously.**

## 6.Strict Mode by Default

**Modules are automatically in strict mode, which enforces a stricter set of rules and helps catch common coding errors.**

## 7.Browser Support

**Modern web browsers support ECMAScript modules. You can use the type="module" attribute in script tags to indicate that a script should be treated as a module.**

## javaScript Fetch API

```
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json))
```

