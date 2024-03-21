// 43. Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.  

function checkRightDigit(num1, num2, num3) {
    let rightDigit1 = num1 % 10;
    let rightDigit2 = num2 % 10;
    let rightDigit3 = num3 % 10;

    return rightDigit1 === rightDigit2 || rightDigit1 === rightDigit3 || rightDigit2 === rightDigit3;
}

let num1 = 945;
let num2 = 225;
let num3 = 428;
let result = checkRightDigit(num1, num2, num3);

console.log(`is ${num1}, ${num2}, and ${num3} have the same right digit? ${result}`);
