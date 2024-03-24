// 1. Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.


function validateInteger(number) {
    if (!Number.isInteger(number)) {
        throw new Error("Invalid number. Please input an integer.");
    }
    console.log(`Number is valid: ${number}`);
}

try {
    validateInteger(4.3);
} catch (error) {
    console.log('Error:', error.message);
}
