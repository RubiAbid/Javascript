
//Write a  program to swap first and last digits of a number.

let num = 123477;
let numStr = num.toString();  // Convert number to string

let swappedStr = numStr[numStr.length - 1] + numStr.slice(1, -1) + numStr[0]; 
let swappedNum = parseInt(swappedStr); 

console.log("Original Number:", num);
console.log("Swapped Number:", swappedNum);
