//Write a program to print all elements of an array in reverse order using a for loop.


let cities=["karachi","lahore","multan","faisalabad"];
for( let i=cities.length-1;i>=0;i--){
    console.log(cities[i])
}

//Write a program to print all elements of an array  in reverse order using while loop.
console.log("****************");


let countries = ["Pakistan", "Turkey", "South Korea", "UAE"];
let n = countries.length - 1; 

while (n >= 0) {
    console.log(countries[n]);
    n--; 
}


//Write a program to print all elements of an array  in reverse order using do while loop.
console.log("****************");



let continents = ["Asia", "South America", "North America", "Europe", "Africa"];

let k = continents.length - 1; 
do {
    console.log(continents[k]); 
    k--; 
} while (k >= 0);