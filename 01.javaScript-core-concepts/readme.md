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

> **Array:** Represents an ordered list of values. Arrays can contain any combination of data types and are created using square brackets [ ].

> **Function:** Represents a reusable block of code that performs a specific task. Functions can be defined using the function keyword or as arrow functions (( ) => { }).









