//Write a program to find sum of all odd numbers between 1 to 10.




let num = 1;
let sum = 0;

while (num <= 10) {
    if (num % 2 !== 0) {  // Check if number is even
        sum += num;        // Add even number to sum
    }
    num++; 
}

console.log("Sum of all odd numbers between 1 to 10:", sum);