// Write a  program to input week number and print week day.

let week = parseInt(prompt("Enter week number")); // parseInt =Convert input to number

if (week === 1) {
    alert("Monday");
} else if (week === 2) {
    alert("Tuesday");
} else if (week === 3) {
    alert("Wednesday");
} else if (week === 4) {
    alert("Thursday");
} else if (week === 5) {
    alert("Friday");
} else if (week === 6) {
    alert("Saturday");
} else if (week === 7) {
    alert("Sunday");
} else {
    alert("Enter a valid week number (1-7)");
}
