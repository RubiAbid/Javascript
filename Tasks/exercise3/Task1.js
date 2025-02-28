/*
Exercise 3: Array and methods ✨Arrays and Methods

Utilise the inbuilt methods of arrays in Javascript to solve the below tasks:

Task 1: Array Filtering
Write a function filterNumbers(arr) that returns only numbers from a mixed array
*/

function filterNumbers(arr) {
    return arr.filter(item => typeof item === "number");
}

console.log(filterNumbers([1, "a", true, 4, 8,"b"])); // Output: [1, 4, 8]
