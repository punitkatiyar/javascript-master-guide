# JavaScript DOM

### The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. In JavaScript, the DOM is available through the document object.

## Here are some basic concepts and methods you should know when working with the DOM:

### Selecting Elements

> getElementById

> getElementsByClassName

> getElementsByTagName

> querySelector

> querySelectorAll

#### Example 

```
const header = document.getElementById("header");
const paragraphs = document.getElementsByClassName("paragraph");
const images = document.getElementsByTagName("img");
const navLinks = document.querySelectorAll("nav a");
```

## HTML Code Like

```
<div id="myDiv">Hello, world!</div>
```

## Control using Javascript

```
// Get the element by its ID
const myDiv = document.getElementById("myDiv");

// Change the text content of the element
myDiv.textContent = "Goodbye, world!";

// Add a new attribute to the element
myDiv.setAttribute("class", "highlight");

// Add a new child element to the div
const newElement = document.createElement("p");
newElement.textContent = "This is a new paragraph.";
myDiv.appendChild(newElement);
```
