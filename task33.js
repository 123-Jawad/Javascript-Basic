// 33. Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.  

function checkNumberRanges(num1, num2) {
    const range1Start = 40;
    const range1End = 60;
    const range2Start = 70;
    const range2End = 100;
    
    if ((num1 >= range1Start && num1 <= range1End) || (num1 >= range2Start && num1 <= range2End)) {
        if ((num2 >= range1Start && num2 <= range1End) || (num2 >= range2Start && num2 <= range2End)) {
            return true; // Return true if both numbers are in one of the specified ranges
        }
    }
    
    return false;
}
let number1 = 55;
let number2 = 70;
let result = checkNumberRanges(number1, number2);

console.log(`Are ${number1} and ${number2} in the specified ranges? ${result}`);

