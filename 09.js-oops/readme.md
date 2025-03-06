# javascript Object Oriented programing (OOP) 

JavaScript is an object-oriented programming (OOP) language, though it differs from traditional class-based OOP languages like Java and C++. JavaScript follows a prototype-based approach, but with the introduction of ES6 classes, it also supports class-based OOP.

## Which OOP Approach Should You Use?

> Use Class-Based OOP if you work with Java, C++, C#, or Python in an enterprise setting.

> Use Prototype-Based OOP when working with JavaScript (before ES6).

> Use Functional OOP if you prefer immutability and composability (e.g., React in JavaScript).

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





