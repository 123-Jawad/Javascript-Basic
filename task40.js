// 40. Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.  

function checkNumbers(num1, num2) {
    return num1 === 8 || num2 === 8 || num1 + num2 === 8;
}

let number1 = 5;
let number2 = 3;
let result = checkNumbers(number1, number2);

console.log(`Are ${number1} or ${number2} equal to 8, or is their sum equal to 8? ${result}`);
