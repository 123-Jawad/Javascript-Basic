// 2. Write a JavaScript program that uses a try-catch block to catch and handle a 'TypeError' when accessing a property of an undefined object.

try {
  let obj = undefined;
  console.log(obj.property);
} 
catch (error) {
  if (error instanceof TypeError) {
    console.log("Error:", error.message);
  } else {
    throw error;
  }
}
