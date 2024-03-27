// 12. Write a JavaScript program that creates a class called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments.

class University {
    constructor(universityName) {
      this.universityName = universityName;
      this.departments = [];
    }  
    addDepartment(departmentName) {
      this.departments.push(departmentName);
      console.log(`Added department '${departmentName}' to ${this.universityName}.`);
    }  
    removeDepartment(departmentName) {
      const index = this.departments.indexOf(departmentName);
      if (index !== -1) {
        this.departments.splice(index, 1);
        console.log(`Removed department '${departmentName}' from ${this.universityName}.`);
      } else {
        console.log(`Department '${departmentName}' not found in ${this.universityName}.`);
      }
    }
  
    displayDepartments() {
      console.log(`Departments of ${this.universityName}:`);
      this.departments.forEach(department => console.log(department));
    }
  }
  
  // Create an instance of University
  const myUniversity = new University('My University');
  // Add departments
  myUniversity.addDepartment('Computer Science');
  myUniversity.addDepartment('Mathematics');
  myUniversity.addDepartment('Physics');

  // Display all departments
  myUniversity.displayDepartments();
  
  // Remove a department
  myUniversity.removeDepartment('Mathematics');
  
  // Display updated departments
  myUniversity.displayDepartments();
  