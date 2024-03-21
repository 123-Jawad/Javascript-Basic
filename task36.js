// 36. Write a JavaScript program that checks whether the last digit of three positive integers is the same.  


function checkTheLastEquality(num1 , num2 ,num3){

    let digit1 = num1 % 10;
    let digit2 = num2 % 10;
    let digit3 = num3 % 10;

    return digit1 === digit2 && digit2 === digit3;
}

let num1 = 124;
let num2 = 234;
let num3 = 544;
let result = checkTheLastEquality(num1 , num2 , num3);
console.log(`The last digit of 3 ${num1}, ${num2}, ${num3} is same ${result}`);