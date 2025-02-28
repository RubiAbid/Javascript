/*
Task 3:
Write a function whatAmI that takes an input and returns a string describing its type after
 conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"
function whatAmI(input) {
}
*/


function whatAmI(input) {
    let type = typeof input; 
    
    if (type === "number") {
        return "I'm a number!";
    } else if (type === "string") {
        return "I'm a string!";
    } else {
        return "I'm something else!";
    }
}

console.log(whatAmI(42));       // Output: "I'm a number!"
console.log(whatAmI("rab"));    // Output: "I'm a string!"
console.log(whatAmI(true));     // Output: "I'm something else!"

