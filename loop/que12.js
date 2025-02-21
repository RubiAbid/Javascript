//Write a  program to find sum of first and last digit of a number.


let num = 123479;
let lastDigit = num % 10;

let firstDigit = num;
for (; firstDigit >= 10; firstDigit = Math.floor(firstDigit / 10)) {
   
}

console.log("First Digit:", firstDigit);
console.log("Last Digit:", lastDigit);
sum=firstDigit+lastDigit;
console.log(`sum of first and last digit is ${sum}`)