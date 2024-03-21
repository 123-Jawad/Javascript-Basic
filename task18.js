// 18. Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.  

function checkPairFor50(num1, num2) {
    if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
        return true; // return true if num1 and num2 is 50 of if their sum is 50
     } else {
        return false; 
    }
}

// Test the function with a pair of numbers
let number1 = 35;
let number2 = 30;
let result = checkPairFor50(number1, number2);

console.log(`For numbers ${number1} and ${number2}, the result is ${result}.`);
