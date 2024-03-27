// 5. Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.

class Shape {
    calculateArea() {
      console.log("Area calculation not implemented for the base Shape class.");
    }
  } 
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculateArea() {
      const area = Math.PI * this.radius * 2;
      console.log(`Area of Circle: ${area.toFixed(2)}`);
    }
}  
  class Triangle extends Shape {
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
    }
  
    calculateArea() {
      const area = (this.base * this.height) / 2;
      console.log(`Area of Triangle: ${area}`);
    }
}
  // Create an instance of Circle and calculate its area
  const circle = new Circle(5);
  circle.calculateArea(); 
  // Create an instance of Triangle and calculate its area
  const triangle = new Triangle(4, 3);
  triangle.calculateArea();
  