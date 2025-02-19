// Write a  program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F


let physics = parseInt(prompt("Enter marks for Physics:"));
let chemistry = parseInt(prompt("Enter marks for Chemistry:"));
let biology = parseInt(prompt("Enter marks for Biology:"));
let mathematics = parseInt(prompt("Enter marks for Mathematics:"));
let computer = parseInt(prompt("Enter marks for Computer:"));

// Calculate total and percentage
let totalMarks = physics + chemistry + biology + mathematics + computer;
let percentage = (totalMarks / 500) * 100; 

// Determine grade
let grade;
if (percentage >= 90 && percentage <= 100) {
    grade = "A";
} else if (percentage >= 80 && percentage < 90) {
    grade = "B";
} else if (percentage >= 70 && percentage < 80) {
    grade = "C";
} else if (percentage >= 60 && percentage < 70) {
    grade = "D";
} else if (percentage >= 40 && percentage < 60) {
    grade = "E";
} else {
    grade = "F";
}

// Display result
alert(`Total Marks: ${totalMarks}/500
Percentage: ${percentage.toFixed(2)}%
Grade: ${grade}`);
