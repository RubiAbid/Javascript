/*

OOPS Task 3

Classes, Objects, and Inheritance

Task 3: Static Methods in Classes
Add a static method isVehicle(obj) to the Vehicle class that checks if a given object is an instance of Vehicle. The method should return true if the object is a Vehicle or a subclass of Vehicle, and false otherwise.
*/

class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    getDetails() {
      return `Make: ${this.make}, Model: ${this.model}`;
    }
  
    move() {
      return "The vehicle is moving";
    }
  
    // Static method to check if an object is an instance of Vehicle or its subclasses
    static isVehicle(obj) {
      return obj instanceof Vehicle;
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model) {
      super(make, model);
    }
  
    move() {
      return "The car is driving";
    }
  
    startEngine() {
      return "Engine started!";
    }
  }
  
  // Creating instances
  const newVehicle = new Vehicle("Toyota", 2024);
  const myCar = new Car("Honda", 2023);
  const randomObj = { type: "Not a Vehicle" };
  
  // Testing static method
  console.log(Vehicle.isVehicle(newVehicle)); // Output: true (Vehicle instance)
  console.log(Vehicle.isVehicle(myCar));      // Output: true (Car extends Vehicle)
  console.log(Vehicle.isVehicle(randomObj));  // Output: false (Not a Vehicle)
  console.log(Car.isVehicle(myCar));          // Output: true (Can be called from Car class)
  