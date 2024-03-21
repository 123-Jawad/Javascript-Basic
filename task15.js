// 15. Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.  

function calculateDifference(number) {
    let difference = Math.abs(number - 13); // Calculate the absolute difference

    if (number > 13) {
        return difference * 2; // Double the absolute difference if number is greater than 13
    } else {
        return difference; // if number is less than or equal to 13 then return simple
    }
}

// Test the function with a given number
let givenNumber = 20;
let result = calculateDifference(givenNumber);

console.log(`The difference between ${givenNumber} and 13 is ${result}.`);
