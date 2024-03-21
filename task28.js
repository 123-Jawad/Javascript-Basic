// 28. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.  


function checkInRange(num1, num2) {
    if ((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99)) {
        return true; // if either number is in the range of 50..99
    } else {
        return false;
    }
}

let number1 = 45;
let number2 = 70;
let result = checkInRange(number1, number2);

console.log(`For numbers ${number1} and ${number2}, at least one is in the range 50..99: ${result}`);

