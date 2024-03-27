// 2. Write a JavaScript function to clone an array.

function cloneArray(array) {
    return [...array];
  }
  
  // Test the function
  const originalArray = [1, 2, 3];
  const clonedArray = cloneArray(originalArray);
  
  console.log(originalArray); 
  console.log(clonedArray)