# javaScript Introduction 

## Js Varibale with descriptive name Convension

## var 

**var: var is the oldest keyword for variable declaration in JavaScript. It has function scope or global scope, but it does not have block scope. Variables declared with var are hoisted, meaning they are moved to the top of their scope during the compilation phase. This allows you to access and assign values to them before they are declared in the code. var variables can be redeclared and reassigned.**


## const

**const: const is also introduced in ES6 and has block scope like let. However, const is used for declaring constants, meaning their values cannot be reassigned once they are assigned. const variables must be assigned a value at the time of declaration and cannot be left uninitialized. Like let, const variables are not hoisted and are limited to the block scope.**


## let 

**let: let was introduced in ECMAScript 6 (ES6) and has block scope. Variables declared with let are limited to the block in which they are declared (e.g., inside a loop or if statement). They are not hoisted like var variables, so you must declare them before using them. let variables can be reassigned but not redeclared within the same scope.**

<hr>

```
///////////////////////////////////////////////
var data = 1;
console.log(data);
{
    var data = "hello";
    console.log(data);
}
console.log(data);
///////////////////////////////////////////////
var data1 = 100;
console.log(data1);
{
    let data1 = 2;
    console.log(data1);
}
console.log(data1);
////////////////////////////////////////////////
const data2 = 200;
console.log(data2);
{
    const data2 = 201;
    console.log(data2);
}
console.log(data2);

```
