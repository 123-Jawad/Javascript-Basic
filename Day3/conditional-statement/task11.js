// 11. Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.


function commonDivisior(num1 ,num2){
    while(num2 !==0){
        let temp =num2;
        num2 = num1 % num2;
        num1= temp;
    }
    return num1;
}
let num1=48;
let num2 =72;
let result = commonDivisior(num1, num2);
console.log("The Gcd of",num1,"and",num2,"is",result);