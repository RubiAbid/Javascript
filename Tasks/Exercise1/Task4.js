/*
Task 4:
Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.

function isItTruthy(input) {
}
*/

function isItTruthy(input) {
    if (Boolean(input)) {
        return "It's truthy!";
    } else {
        return "It's falsey!";
    }
}

console.log(isItTruthy(1));     // Output: "It's truthy!"
console.log(isItTruthy(false));    // Output: "It's falsey!"
