/*
OOPS Task 2

Functional Constructor and Errors
Task 1: Create a Functional Constructor
Create a functional constructor Person that takes name and age as parameters. Add a method greet() to the constructor that returns "Hello, my name is [name]".

Task 2: Handle Errors
Modify the Person constructor to throw an error if the age is not a positive number.

function Person() {
}

*/




// Functional Constructor with Error Handling
function Person(name, age) {
    if (typeof age !== "number" || age <= 0) {
        throw new Error("Age must be a positive number.");
    }
    
    this.name = name;
    this.age = age;
}

// Adding greet() method to the prototype
Person.prototype.greet = function () {
    return `Hello, my name is ${this.name}`;
};

try {
    // Valid Person instance
    const person1 = new Person("Rubi", 23);
    console.log(person1.greet()); // Output: Hello, my name is Rubi

    // Invalid Person instance (throws error)
    const person2 = new Person("Ali", -5);
    console.log(person2.greet()); // This line will not execute
} catch (error) {
    console.error(error.message); // Output: Age must be a positive number.
}
