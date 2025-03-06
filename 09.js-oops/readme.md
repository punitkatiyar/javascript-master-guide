# Object oriented programming (OOP)

it is a programming paradigm that revolves around the concept of "objects." It's a way of designing and organizing code by representing real-world entities and their interactions as software objects. OOP aims to provide a more intuitive and organized approach to structuring code by focusing on data encapsulation, abstraction, inheritance, and polymorphism.

## Which OOP Approach Should You Use?

- **Use Class-Based OOP** if you work with Java, C++, C#, or Python in an enterprise setting.

- **Use Prototype-Based OOP** when working with JavaScript (before ES6).

- **Use Functional OOP** if you prefer immutability and composability (e.g., React in JavaScript).

## Key OOP Concepts in JavaScript:

## 1. Objects

- Everything in JavaScript is an object or acts like one (except primitive data types).

- Objects contain properties (key-value pairs) and methods (functions inside objects).

```
let person = {
    name: "admin",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person.greet(); // Output: Hello, my name is admin
```










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





