// 13. Write a JavaScript exercise to create a variable using a user-defined name.  



// Define an object to hold user-defined variables
let userVariables = {};

// User-defined variable name and value
let variableName = 'Jawad';
let variableValue = 42;

// Assign the variable name to a property with the user-defined name
userVariables[variableValue] = variableName;

// Access the variable Name using the user-defined name
console.log(userVariables[variableValue]);
