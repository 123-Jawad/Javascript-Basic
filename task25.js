// 25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.  


function checkMultipleOf3Or7(number) {
    if (number % 3 === 0 || number % 7 === 0) {
        return true; // Return true if the number is a multiple of 3 or 7
    } else {
        return false; // Return false otherwise
    }
}

let positiveNumber = 22;
let result = checkMultipleOf3Or7(positiveNumber);

if (result) {
    console.log(`${positiveNumber} is a multiple of 3 or 7.`);
} else {
    console.log(`${positiveNumber} is not a multiple of 3 or 7.`);
}
