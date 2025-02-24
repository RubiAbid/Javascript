//Write a  program to swap first and last digits of a number.



let num = 346788564;

// Convert number to string to easily manipulate digits
let numStr = num.toString();

// Get first and last digits
let firstDigit = numStr[0]; 
let lastDigit = numStr[numStr.length - 1];

// Swap first and last digits
let swappedNumStr = lastDigit + numStr.slice(1, -1) + firstDigit;

// Convert back to a number
let swappedNum = parseInt(swappedNumStr);

console.log(`Original Number: ${num}`);
console.log(`Swapped Number: ${swappedNum}`);
