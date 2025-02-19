
// Write a  program to input all sides of a triangle and check whether triangle is valid or not.


let side1 = parseInt(prompt("Enter first side"));
let side2 = parseInt(prompt("Enter second side"));
let side3 = parseInt(prompt("Enter third side"));

if (side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2) {
    alert("It is a valid triangle");
} else {
    alert("It is not a valid triangle");
}
