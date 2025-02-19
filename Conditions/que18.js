//  Write a  program to calculate profit or loss.

let CP = parseInt(prompt("Enter cost price"));
let SP = parseInt(prompt("Enter selling price"));

if(SP>CP){
    profit=SP-CP;
 alert(`The profit in rupees is ${profit} `)
}
else{
    loss=CP-SP;
    alert(`The loss in rupees is ${loss} `)
}

