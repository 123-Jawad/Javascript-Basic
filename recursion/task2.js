// 2. Write a JavaScript program to find the greatest common divisor (GCD) of two positive numbers using recursion.  


function commonDivisior(a, b) {
    //if one of the numbers is 0 then return the other number as GCD
    if (b === 0) {
        return a;
    } else {
        return commonDivisior(b, a % b);
    }
}
let num1 = 12;
let num2 = 48;
let result = commonDivisior(num1, num2);
console.log(`The GCD of ${num1} and ${num2} is ${result}`);
