// 45. Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.  
function checkValue(num1, num2) {
    return num1 === 15 || num2 === 15 || num1 + num2 === 15;
}

let number1 = 10;
let number2 = 8;
let result = checkValue(number1, number2);

console.log(`Is ${number1} or ${number2} equal to 15, or is their sum equal to 15? ${result}`);
