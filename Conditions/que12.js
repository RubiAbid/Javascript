// Write a  program to input month number and print number of days in that month.



let month = parseInt(prompt("Enter month number (1-12)"));

if (month === 1 || month === 3 || month === 5 || month === 7 || 
    month === 8 || month === 10 || month === 12) {
    alert("31 days");
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
    alert("30 days");
} else if (month === 2) {
    alert("28 or 29 days (February)");
} else {
    alert("Enter a valid month number (1-12)");
}
