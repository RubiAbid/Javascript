// Write a  program to find all roots of a quadratic equation.

let a = parseInt(prompt("Enter value of a"));
let b = parseInt(prompt("Enter value of b"));
let c = parseInt(prompt("Enter value of c"));

let discriminant = (b ** 2) - (4 * a * c);

if (discriminant > 0) {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    alert(`Roots are real and distinct: root1 = ${root1}, root2 = ${root2}`);
} 
else if (discriminant === 0) {
    let root = -b / (2 * a);
    alert(`Roots are real and equal: root = ${root}`);
} 
else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imaginaryPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
    alert(`Roots are complex: ${realPart} + ${imaginaryPart}i, ${realPart} - ${imaginaryPart}i`);
}




