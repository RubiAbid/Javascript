// Write a  program to check whether a character is uppercase or lowercase alphabet.


let variable = "AA"; 

if (variable === variable.toUpperCase()) {
    console.log("The word is completely uppercase.");
} else if (variable === variable.toLowerCase()) {
    console.log("The word is completely lowercase.");
} else {
    console.log("The word contains both uppercase and lowercase letters.");
}
