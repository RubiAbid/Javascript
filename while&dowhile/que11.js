//Write a  program to find first and last digit of a number.


let num = 34678;

let lastDigit = num % 10; // Get the last digit
let firstDigit = num;

// Extract the first digit
while (firstDigit >= 10) {
    firstDigit = Math.floor(firstDigit / 10);
}

// Print the first and last digit
console.log(`First Digit = ${firstDigit} and Last Digit = ${lastDigit}`);
