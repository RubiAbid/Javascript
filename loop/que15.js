// Write a  program to calculate product of digits of a number.


let num = 119; 
let product = 1;

for (; num > 0; num = Math.floor(num / 10)) {
    product *= num % 10; 
}

console.log("product of digits:", product);
