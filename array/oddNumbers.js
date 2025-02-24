//Write a program to print only odd numbers from an array using a loop.

let numbers = [1, 2, 3, 5, 6, 8, 0, 2, 44, 68, 96, 3455];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) { // Check for odd numbers
        console.log(`The odd number in the given array is ${numbers[i]}`);
    }
}

console.log("****************");

//Write a program to print only odd numbers from an array using while loop.
let num = [1, 2, 3, 5, 6, 8, 0, 2, 44, 68, 96, 3455];
let j = 0;

while (j < num.length) {
    if (num[j] % 2 !== 0) { // Check for odd numbers
        console.log(`The odd number in the given array is ${num[j]}`);
    }
    j++;
}

console.log("****************");

//Write a program to print only odd numbers from an array usingdo while loop.
let number = [1, 2, 3, 5, 6, 8, 0, 2, 44, 68, 96, 3455];
let k = 0;

do {
    if (number[k] % 2 !== 0) { // Check for odd numbers
        console.log(`The odd number in the given array is ${number[k]}`);
    }
    k++;
} while (k < number.length);
