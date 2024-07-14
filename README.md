# 🥇 JavaScript Master Guide

***javascript is a scripting laguage work with html css and web browsers to make web page alive.***

## Where to use javascript 

> DOM

> BOM

> Console   





<hr>

- **Script Tag**
- **Script Attribute**

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

##  Script Tag Attribute Example

```
<script src="app.js"></script>
<script src="app.js" type="text/javascript"></script>
<script src="module.js" type="module"></script>
<script src="app.js" async></script>
<script src="app.js" defer></script>
<script src="app.js" integrity="sha384-hash"></script>
<script src="app.js" crossorigin="anonymous"></script>
```

## console  

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










<!--

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

-->

https://www.taniarascia.com/es6-syntax-and-feature-overview/

<hr>
<a href="https://punitkatiyar.github.io/">Back To Home Page</a>
<hr>
