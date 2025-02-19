// Write a  program to count total number of notes in given amount.

let amount = parseInt(prompt("Enter the total amount:")); // Take user input

let notes500 = 0, notes100 = 0, notes50 = 0, notes20 = 0, notes10 = 0, notes5 = 0, notes2 = 0, notes1 = 0;

if (amount >= 500) {
    notes500 = Math.floor(amount / 500);
    amount = amount % 500; // Update remaining amount
}

if (amount >= 100) {
    notes100 = Math.floor(amount / 100);
    amount = amount % 100;
}

if (amount >= 50) {
    notes50 = Math.floor(amount / 50);
    amount = amount % 50;
}

if (amount >= 20) {
    notes20 = Math.floor(amount / 20);
    amount = amount % 20;
}

if (amount >= 10) {
    notes10 = Math.floor(amount / 10);
    amount = amount % 10;
}

if (amount >= 5) {
    notes5 = Math.floor(amount / 5);
    amount = amount % 5;
}

if (amount >= 2) {
    notes2 = Math.floor(amount / 2);
    amount = amount % 2;
}

if (amount >= 1) {
    notes1 = Math.floor(amount / 1);
    amount = amount % 1;
}

// Display result
alert(`Total number of notes:
    500 : ${notes500}
    100 : ${notes100}
    50  : ${notes50}
    20  : ${notes20}
    10  : ${notes10}
    5   : ${notes5}
    2   : ${notes2}
    1   : ${notes1}`);
    