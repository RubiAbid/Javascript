/*
OOPS Task 1
Prototypes in JavaScript
Task: Prototype Chaining
Create a constructor function Animal that has a method speak() that return 'Animal speaking'.
Then create another constructor Dog that inherits from Animal using prototypes.
The Dog constructor should add a method bark() that returns 'Woof!'. Demonstrate the prototype chain between Dog and Animal.
Learning objective


function Animal() {
}

function Dog() {
}
*/


// Parent Constructor
function Animal() {}

Animal.prototype.speak = function () {
    return "Animal speaking";
};

// Child Constructor
function Dog() {}

// Inherit from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Add Dog-specific method
Dog.prototype.bark = function () {
    return "Woof!";
};

// Demonstrate prototype chaining
const myDog = new Dog();
console.log(myDog.speak()); // Inherited method from Animal -> "Animal speaking"
console.log(myDog.bark());  // Dog-specific method -> "Woof!"
