// Write a program to find first and last digit of a number.


let num = 123477;
let lastDigit = num % 10;

let firstDigit = num;
for (; firstDigit >= 10; firstDigit = Math.floor(firstDigit / 10)) {
   
}

console.log("First Digit:", firstDigit);
console.log("Last Digit:", lastDigit);











// 
// Step	      Value of firstDigit	     Condition (firstDigit >= 10)       	Operation (Math.floor(firstDigit / 10))
// Start               1234	            ✅ 1234 >= 10 (True)	                     Math.floor(1234 / 10) = 123
// 1st Iteration	    123	             ✅ 123 >= 10 (True)	                      Math.floor(123 / 10) = 12
// 2nd Iteration         12	             ✅ 12 >= 10 (True)	                      Math.floor(12 / 10) = 1
// 3rd Iteration	      1	             ❌ 1 >= 10 (False)                          	Loop stops