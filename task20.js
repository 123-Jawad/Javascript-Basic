// 20. Write a JavaScript program to check two given integers whether one is positive and another one is negative.  

function checkOppositeSigns(num1, num2) {
    if ((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)) {
        return true; // Return true if one integer is positive and the other is negative
    } else {
        return false; // Return false otherwise
    }
}

// Test the function with two given integers
let number1 = 7;
let number2 = -9;
let result = checkOppositeSigns(number1, number2);

console.log(`For numbers ${number1} and ${number2}, one is positive and the other is negative: ${result}`);
