// 1. Write a JavaScript function to check whether an `input` is an array or not.

function isArray(input) {
    return Array.isArray(input);
  }
  
  console.log(isArray([1, 2, 3])); 
  console.log(isArray('Hello')); 
  