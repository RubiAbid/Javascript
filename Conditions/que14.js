// Write a  program to input angles of a triangle and check whether triangle is valid or not.

let angle1=parseInt(prompt("Enter first Angle"));
let angle2=parseInt(prompt("Enter Second Angle"));
let angle3=parseInt(prompt("Enter third Angle"));

if(angle1+angle2+angle3===180){
    alert("It is a triangle")
}

else{
    alert("It is not a triangle")
}