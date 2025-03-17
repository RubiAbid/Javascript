/*
OOPS Task 3

Classes, Objects, and Inheritance

Task 2: Method Overriding in Inheritance
Extend the Vehicle class from the previous task to include a method move() that returns "The vehicle is moving". Then, override the move() method in the Car class to return "The car is driving".
*/


class Vehicle{

    constructor(make,model){
      this.make=make;
      this.model=model;
    }
  
  
    getDetails(){
      return `Make: ${this.make}, Model: ${this.model}`
    }
    move(){
        return "the vehicle is moving"
    }
  }
  
  class Car extends Vehicle{
    constructor(make,model){
      super(make,model);}
  
    move(){
        return "The car is driving"; 
    }


    startEngine(){
      return "Start engine"
    }
  }
  


  // Creating instances and testing method overriding
const newVehicle = new Vehicle("Toyota", 2024);
console.log(newVehicle.getDetails()); // Output: Make: Toyota, Model: 2024
console.log(newVehicle.move()); // Output: The vehicle is moving

