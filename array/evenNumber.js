//Write a program to print only even numbers from an array using a loop.


let numbers=[1,2,3,5,6,8,0,2,44,68,96,3455]

for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2===0){
        console.log(`The even numbers in given array are ${numbers[i]}`)
    }
}


//Write a program to print only even numbers from an array using while loop.
console.log("****************");


let num = [1, 2, 3, 5, 6, 8, 0, 2, 44, 68, 96, 3455];
let j = 0;

while (j < num.length) {
    if (num[j] % 2 === 0) {
        console.log(`The even number in the given array is ${num[j]}`);
    }
    j++; 
}


//Write a program to print only even numbers from an array using do while loop.
console.log("****************");


let number= [1, 2, 3, 5, 6, 8, 0, 2, 44, 68, 96, 3455];
let k=0;
do{
    if (number[k] % 2 === 0){
        console.log(`The even number in the given array is ${number[k]}`);
    }
    k++;
}
while(k<number.length);



