// 3. Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.

class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    displayDetails() {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}
  class Car extends Vehicle {
    constructor(make, model, year, doors) {
      super(make, model, year);
      this.doors = doors;
    }
    displayDetails() {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Doors: ${this.doors}`);
    }
}
  // Create an instance of Vehicle
  const vehicle1 = new Vehicle('Toyota', 'Crown', 2020);
  vehicle1.displayDetails();
  
  // Create an instance of Car
  const car1 = new Car('Honda', 'Civic', 2023, 4);
  car1.displayDetails();
  