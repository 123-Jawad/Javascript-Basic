// 3. Write a JavaScript program to get the length of a JavaScript object.

const person = {
    firstName: 'Jawad',
    lastName: 'Saleem',
    age: 30,
    email: 'jawadsaleem@example.com'
  };
  
  const length = Object.keys(person).length;
  
  console.log('Length of the object:', length);
  