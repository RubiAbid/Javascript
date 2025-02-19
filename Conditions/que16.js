// Write a C program to check whether the triangle is equilateral, isosceles or scalene triangle.

let side1 = parseInt(prompt("Enter first side"));
let side2 = parseInt(prompt("Enter second side"));
let side3 = parseInt(prompt("Enter third side"));

// First, check if it's a valid triangle
if (side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2) {
    if (side1 === side2 && side2 === side3) {
        alert("It is an equilateral triangle");
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        alert("It is an isosceles triangle");
    } else {
        alert("It is a scalene triangle");
    }
} else {
    alert("The given sides do not form a valid triangle");
}
