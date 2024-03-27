// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

const student = {
    name: 'Jawad',
    rollno: 12345,
    age: 20
  };
  
  console.log('Object before deleting the property:', student);
  
  delete student.rollno;
  
  console.log('Object after deleting the property:', student);
  