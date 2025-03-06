# local Storage 

Local storage allows you to store data in the browser persistently, meaning the data remains even after a page reload or browser restart.

## Basic Methods

- localStorage.setItem(key, value): Stores data.

- localStorage.getItem(key): Retrieves data.

- localStorage.removeItem(key): Deletes a specific item.

- localStorage.clear(): Clears all stored data.

## Example 

  ```
// Save data to localStorage
localStorage.setItem("username", "JohnDoe");

// Retrieve data
const username = localStorage.getItem("username");
console.log(username);

// Remove data
localStorage.removeItem("username");

// Clear all data
localStorage.clear();
  ```
