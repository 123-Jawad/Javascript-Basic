// 1. Write a JavaScript program to list the properties of a JavaScript object.

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    email: 'jawad@example.com'
  };
  
  const properties = Object.keys(person);
  
  console.log('Properties of the object:', properties);
  