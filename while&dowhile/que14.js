//Write a  program to calculate sum of digits of a number.

let num=1223111;
let sum=0;
while(num>0){
    sum+=num%10; //extract last number and add to sum
    num=Math.floor(num/10);//remove last digit which already added to sum
}
console.log(`The sum of digits of a number is ${sum}`)