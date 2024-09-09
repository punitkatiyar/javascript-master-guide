# Module Integration 🏆

**JavaScript modules are reusable pieces of code that can be imported and exported between files. They allow for better organization, maintenance, and encapsulation of code. Modules are part of the ECMAScript 6 (ES6) specification and are commonly used in modern JavaScript development.**

<!--
> Module system is a standardized way of organizing and structuring code in JavaScript applications.

> It allows developers to create reusable pieces of code (modules) that can be imported and used in other parts of their applications.

> Modules were introduced as part of ES6 to address the need for a more scalable and modular approach.

-->

## 1. Module Definition

> A module is a file that contains JavaScript code and may include variables, functions, classes.

> Each module has its own scope, which means that the variables and functions declared in a module are not automatically visible in other modules.

## 2. Key Concepts of JavaScript Modules

> **Exporting:** You can export functions, objects, or primitive values from a module so they can be used in other modules.

> **Importing:** You can import exported elements from one module into another.

## 3. Types of Exports

### **Named Exports:** Multiple exports from a module; you can selectively import them by name.

> Exports 

```
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
```

> import

```
// Importing named exports
import { add, subtract } from './mathUtils.js';

console.log(add(5, 3));        // Output: 8
console.log(subtract(5, 3));   // Output: 2
```



### **Default Exports:** A single export per module; you can import it without using the specific name.


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

