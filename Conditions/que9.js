// Write a  program to input any character and check whether it is alphabet, digit or special character.

let variable = prompt("Enter any single alphabet, digit, or special character: ");

// Ensure input is a single character
if (variable.length === 1) {
    // Check if it is an alphabet (a-z or A-Z)
    if ((variable >= "a" && variable <= "z") || (variable >= "A" && variable <= "Z")) {
        console.log("Entered value is an alphabet");
    }
    // Check if it is a digit (0-9)
    else if (variable >= "0" && variable <= "9") {
        alert("Entered value is a number");
    }
    // If not an alphabet or number, it's a special character
    else {
        alert("Entered value is a special character");
    }
} else {
    alert("Invalid input! Please enter a single character.");
}
