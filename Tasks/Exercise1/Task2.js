/*

Task 2:
Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.
function flipBoolean(input) {
}

*/


function flipBoolean(input) {
    let boolValue=Boolean(input);
    return !boolValue;
}

console.log(flipBoolean(1))
