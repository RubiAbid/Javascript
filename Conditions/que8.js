// Write a  program to input any alphabet and check whether it is vowel or consonant.

// Ask user for input using prompt
let variable = prompt("Enter an alphabet:");

// Convert input to lowercase for case insensitivity
variable = variable.toLowerCase();

// Check if input is a single alphabet letter
if (variable.length === 1 && variable >= "a" && variable <= "z") {
   
    if ("aeiou".includes(variable)) {
        alert("It is a vowel");
    } else {
        alert("It is a consonant");
    }
} else {
    alert("Invalid input! Please enter a single alphabet letter.");
}
