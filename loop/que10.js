// Write a program to count number of digits in a number.



let count = 0;

for (let num=123458888888888; num > 0; num = Math.floor(num / 10)) {
    count++;
}

console.log("Total number of digits:", count);
