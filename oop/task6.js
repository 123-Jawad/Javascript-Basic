// 6. Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.


class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
  
    calculateAnnualSalary() {
      return this.salary * 12;
    }
  }
  
  class Manager extends Employee {
    constructor(name, salary, department) {
      super(name, salary);
      this.department = department;
    }
  
    calculateAnnualSalary() {
      // Manager's annual salary includes a bonus
      const baseSalary = super.calculateAnnualSalary(); // Calling the superclass method
      const bonus = baseSalary * 0.1; // Bonus is 10% of base salary
      return baseSalary + bonus;
    }
  }
  
  // Here is two instances of Manager and calculate annual salaries
  const manager1 = new Manager('Ahmad Aslam', 50000, 'desigining');
  const manager2 = new Manager('Jawad Saleem', 60000, 'developing');
  console.log(`${manager1.name} - Department: ${manager1.department}, Annual Salary: $${manager1.calculateAnnualSalary()}`);
  console.log(`${manager2.name} - Department: ${manager2.department}, Annual Salary: $${manager2.calculateAnnualSalary()}`);
  