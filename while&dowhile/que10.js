//Write a  program to count number of digits in a number.


let num = 12345; 
let count = 0;

while (num > 0) {
    num = Math.floor(num / 10); // Remove the last digit
    count++; 
}

console.log("Total number of digits:", count);
