/*  
Write a program to input basic salary of an employee and calculate its Gross salary according to following:
Basic Salary <= 10000 : HRA = 20%, DA = 80%
Basic Salary <= 20000 : HRA = 25%, DA = 90%
Basic Salary > 20000 : HRA = 30%, DA = 95% 
 */

let basicSalary = parseFloat(prompt("Enter basic salary:"));


let hra, da;


if (basicSalary <= 10000) {
    hra = basicSalary * 0.20; // 20% of basic salary
    da = basicSalary * 0.80; 
} else if (basicSalary <= 20000) {
    hra = basicSalary * 0.25; 
    da = basicSalary * 0.90;  
} else {
    hra = basicSalary * 0.30; 
    da = basicSalary * 0.95; 
}

// Calculate Gross Salary
let grossSalary = basicSalary + hra + da;

//Result
alert(`Basic Salary: ${basicSalary.toFixed(2)}
HRA: ${hra.toFixed(2)}
DA: ${da.toFixed(2)}
Gross Salary: ${grossSalary.toFixed(2)}`);


