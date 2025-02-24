//Write a  program to find sum of first and last digit of a number.

let num = 346999; // Example number

let lastDigit = num % 10; // Get the last digit
let firstDigit = num;

// Extract the first digit
while (firstDigit >= 10) {
    firstDigit = Math.floor(firstDigit / 10);
    sum=firstDigit+lastDigit;
}

// Print the first and last digit
console.log(`The sum of First Digit = ${firstDigit} and Last Digit = ${lastDigit} is ${sum}`);
