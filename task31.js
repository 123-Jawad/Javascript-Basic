// 31. Write a JavaScript program to find the largest of three given integers.  

function findLargest(num1, num2, num3) {
    let largest = num1; 

    if (num2 > largest) {
        largest = num2; // Update largest if num2 is greater than the current largest
    }

    if (num3 > largest) {
        largest = num3; // Update largest if num3 is greater than the current largest
    }

    return largest; 
}
let number1 = 10;
let number2 = 20;
let number3 = 15;
let result = findLargest(number1, number2, number3);

console.log(`The largest of ${number1}, ${number2}, and ${number3} is: ${result}`);
