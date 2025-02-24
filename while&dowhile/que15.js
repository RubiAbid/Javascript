//Write a  program to calculate product of digits of a number.


let num=12232;
let product=1;
while(num>0){
    product*=num%10; //extract last number and add to sum
    num=Math.floor(num/10);//remove last digit which already added to sum
}
console.log(`The product of digits of a number is ${product}`)