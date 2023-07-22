# 🥇 JavaScript Master Guide

javascript is a scripting laguage work with html css and web browsers to make web page alive.

<hr>

> 🦝 script tag

> 🦝 script attribute

<hr>

script tag is used to embed or reference external JavaScript code within an HTML document.
The < script > tag supports various attributes that can modify its behavior and specify additional settings.

<hr>


## The Script Tag

**< script > tag is used to embed or reference external JavaScript code within an HTML document. The < script > tag supports various attributes that can modify its behavior and specify additional settings.**

## Script Tag Attribute

> **src:** This attribute is used to specify the source file URL of the JavaScript code to be loaded.

> **type:** The type attribute indicates the MIME type of the script content. The default value is "text/javascript". For modern JavaScript, you can use "module" to enable ES6 module

> **async:** The async attribute specifies that the script should be executed asynchronously. This allows the rest of the HTML page to load and render without waiting for the script to be fully downloaded and executed

> **defer:** The defer attribute indicates that the script should be executed after the HTML document has been parsed. This ensures that the script does not block the parsing and rendering of the HTML page

> **Integrity:** The integrity attribute provides a security feature that allows you to specify a cryptographic hash of the script file. This ensures that the script is not modified or tampered with during delivery.

>  **crossorigin:** The crossorigin attribute is used when loading scripts from different domains. It controls whether the script can access resources from a different origin.

```
<script src="app.js"></script>
<script src="app.js" type="text/javascript"></script>
<script src="module.js" type="module"></script>
<script src="app.js" async></script>
<script src="app.js" defer></script>
<script src="app.js" integrity="sha384-hash"></script>
<script src="app.js" crossorigin="anonymous"></script>
```











**console is a built-in object that provides a way to interact with the browser's debugging console or the terminal console (in Node.js). It provides a set of methods that allow developers to output information, such as log messages, warnings, errors, and other debugging information.**

## Some of the most commonly used console methods include:

```
console.log(): Outputs a message to the console.
console.error(): Outputs an error message to the console.
console.warn(): Outputs a warning message to the console.
console.info(): Outputs an informational message to the console.
console.table(): Outputs data as a table in the console
```
<hr>

# javaScript Introduction 

## Js Varibale with descriptive name Convension

## var 

**var: var is the oldest keyword for variable declaration in JavaScript. It has function scope or global scope, but it does not have block scope. Variables declared with var are hoisted, meaning they are moved to the top of their scope during the compilation phase. This allows you to access and assign values to them before they are declared in the code. var variables can be redeclared and reassigned.**


## const

**const: const is also introduced in ES6 and has block scope like let. However, const is used for declaring constants, meaning their values cannot be reassigned once they are assigned. const variables must be assigned a value at the time of declaration and cannot be left uninitialized. Like let, const variables are not hoisted and are limited to the block scope.**


## let 

**let: let was introduced in ECMAScript 6 (ES6) and has block scope. Variables declared with let are limited to the block in which they are declared (e.g., inside a loop or if statement). They are not hoisted like var variables, so you must declare them before using them. let variables can be reassigned but not redeclared within the same scope.**

<hr>

## Primitive Data Types:

> **Number:** Represents numeric values. It can be an integer or a floating-point number.

> **String:** Represents sequences of characters. It is enclosed in single quotes (' ') or double quotes (" ").

> **Boolean:** Represents either true or false. It is used for logical operations and conditional statements.

> **Null:** Represents the intentional absence of any object value.

> **Undefined:** Represents an uninitialized variable or an object property that does not exist.

> **Symbol:** Represents a unique and immutable value that can be used as an identifier for object properties.

## Complex Data Types:

> **Object:** Represents a collection of key-value pairs and is used to store more complex data. Objects can be created using the new Object( ) syntax or object literals { }.

> **Array:** Represents an ordered list of values. Arrays can contain any combination of data types and are created using square brackets [ ].

> **Function:** Represents a reusable block of code that performs a specific task. Functions can be defined using the function keyword or as arrow functions (( ) => { }).










## Module 1

> **Introduction javaScript.**

> JS Enviroments

> JS Hello program

> JS Variable

> Js DataType

> Template Literals

> JS Oprater

> JS Conditional Statement

> JS Loops

> JS Function and Anonymous Function

> JS Popups

<hr>
<a href="https://punitkatiyar.github.io/">Back To Home Page</a>
<hr>
