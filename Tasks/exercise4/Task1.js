/*
Exercise 4: Loops ✨

Task 1: Sum of First N Natural Numbers
Write a function sumOfN(n) that returns the sum of the first n natural numbers
*/

function sumOfN(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
       
    }
    return sum;
}
console.log(sumOfN(3));