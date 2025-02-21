// Write a  program to find sum of all even numbers between 1 to 100.

sum=0;
for (let i=1;i<=100;i++){
  if(i%2===0){
 sum+=i;
  }
}

console.log("Sum of even numbers between 1 to 100 is:", sum);