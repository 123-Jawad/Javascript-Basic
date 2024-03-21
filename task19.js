// 19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.  

function checkIntegerWithinRange(number) {
    if ((Math.abs(100 - number) <20) || (Math.abs(400 - number) <20)) {
        return true; // Return true if the number is within 20 of 100 or 400
    } else {
        return false; // Return false otherwise
    }
}

// Test the function with a given integer
let givenNumber = 110;
let result = checkIntegerWithinRange(givenNumber);

console.log(`The number ${givenNumber} is within 20 of 100 or 400: ${result}`);
