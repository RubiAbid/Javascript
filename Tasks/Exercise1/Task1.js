/* 

Task 1:
Write a function stringToNumber that takes a string input and tries to convert it to a number.
 If the conversion fails, return "Not a number".
function stringToNumber(input) {
}

*/


function stringToNumber(input) {
    let strToNum = Number(input); 
    
    if (!isNaN(strToNum)) { // Check if it's a valid number
        console.log(strToNum); 
    } else {
        console.log("Not a number"); 
    }
}

stringToNumber("123");   // Output: 123
stringToNumber("abc");   // Output: Not a number
stringToNumber("12.34"); // Output: 12.34
stringToNumber("");      // Output: 0 (because Number("") is 0)
stringToNumber("123abc");// Output: Not a number
