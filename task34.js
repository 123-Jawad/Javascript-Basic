// 34. Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.  


function inRange(num1 ,num2){

    if ((num1 >= 40 && num1 <= 60) || (num2 >= 40 && num2 <= 60)) {
        return true;
    }else{
        return false
    }
} 

let num1 =10;
let num2 = 50;
let result = inRange(num1 , num2);
console.log(`For numbers ${num1} and ${num2}, at least one is in the range 40..60: ${result}`);
