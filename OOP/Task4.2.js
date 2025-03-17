/*
OOPS Task 4

Encapsulation, Polymorphism, Abstraction, and Getters/Setters

Task 2: Polymorphism with Method Overriding
Create a class Shape with a method area() that returns 0. Create two subclasses Circle and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively.

// Task 2
class Shape {
}

class Circle {
}

class Rectangle {
}
*/



class Shape {

    area(){
        return 0;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }

    area() {
        return this.length * this.width;
    }
}

const mycircle=new Circle(8);
console.log("Circle Area:", mycircle.area()); 

const myRectangle = new Rectangle(3, 6);
console.log("Rectangle Area:", myRectangle.area());