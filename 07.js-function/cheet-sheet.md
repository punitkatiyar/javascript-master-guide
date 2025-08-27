# 1. Basic Function

```
function greet() {
  console.log("Hello, World!");
}
greet();  // Output: Hello, World!
```

✅ Use Case: Reusable block of code.

# 2. Function with Parameters

```
function add(a, b) {
  return a + b;
}
console.log(add(5, 3));  // Output: 8
```

✅ Use Case: Calculator, input/output logic.

# 3. Default Parameters

```
function multiply(a, b = 2) {
  return a * b;
}
console.log(multiply(5));    // Output: 10
console.log(multiply(5, 3)); // Output: 15
```

✅ Use Case: When optional arguments are not provided.

# 4. Function Expressions

```
const square = function (num) {
  return num * num;
};
console.log(square(4));  // Output: 16
```

✅ Use Case: Store functions in variables.

# 5. Arrow Functions (ES6+)

```
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Punit"));  // Output: Hello, Punit!
```

✅ Use Case: Short, clean syntax for callbacks.

# 6. Anonymous Functions

```
setTimeout(function () {
  console.log("Executed after 2 seconds");
}, 2000);
```

✅ Use Case: Inline one-time functions.

# 7. Callback Functions

```
function processUserInput(name, callback) {
  console.log("User name: " + name);
  callback();
}

processUserInput("Punit", () => console.log("Callback executed"));
```

✅ Use Case: Handling events, async code.

# 8. Higher-Order Functions

**(Functions that take another function as an argument or return a function.)**

```
function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}
const double = multiplier(2);
console.log(double(5));  // Output: 10
```

✅ Use Case: Reusable logic generators.

# 9. Immediately Invoked Function Expression (IIFE)

```
(function () {
  console.log("IIFE executed immediately!");
})();
```

✅ Use Case: Run code instantly, avoid polluting global scope.

# 10. Rest Parameters
```
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
```

✅ Use Case: Accept variable number of arguments.

# 11. Spread Operator with Functions

```
function maxNum(a, b, c) {
  return Math.max(a, b, c);
}
const arr = [5, 9, 2];
console.log(maxNum(...arr)); // Output: 9
```

✅ Use Case: Passing arrays to functions.

#12. Closures

**(A function that remembers variables from its outer scope.)**

```
function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const increment = counter();
console.log(increment()); // 1
console.log(increment()); // 2
```

✅ Use Case: Data privacy, encapsulation.

# 13. Recursion

**(A function that calls itself.)**

```
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120
```

✅ Use Case: Tree traversal, mathematical problems.


# 14. Generator Functions

```
function* numberGen() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = numberGen();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
```

✅ Use Case: Iterators, lazy evaluation.

# 15. Function Constructor (rarely used)

```
const add = new Function("a", "b", "return a + b");
console.log(add(3, 4)); // Output: 7

```

✅ Use Case: Dynamic function creation (not recommended for normal use).







