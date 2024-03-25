// 1. Write a JavaScript program that displays the largest integer among two integers.


function largestInteger(num1, num2){
    if(num1 > num2){
        return num1 + " is the largest number";
    }else if(num2 > num1){
        return num2 + " is the largest number";
    }
    else{
        return ("both number are Same");
    }
}
let num1 =25;
let num2 = 25;
let result = largestInteger(num1 , num2);
console.log(result);