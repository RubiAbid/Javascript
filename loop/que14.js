// Write a  program to calculate sum of digits of a number.


let num = 1114; 
let sum = 0;

for (; num > 0; num = Math.floor(num / 10)) {
    sum += num % 10; 
}

console.log("Sum of digits:", sum);
