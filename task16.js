// 16. Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.  


function computeSum(a, b) {
    let sum = a + b;

    if (a === b) {
        return sum * 3; // triple the sum 
    } else {
        return sum; // return the sum
    }
}

// Test the function
let num1 = 9;
let num2 = 9;
let result = computeSum(num1, num2);

console.log(`The sum of ${num1} and ${num2} is ${result}.`);
