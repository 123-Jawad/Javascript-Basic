// 24. Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.

function addFirstCharToFrontAndBack(str) {

    let firstChar = str.charAt(0); // Get the first character of string
    
    let modifiedString = firstChar + str + firstChar; // Create the modified string
    return modifiedString;
}

// Test the function with a given string
let givenString = "jawad";
let result = addFirstCharToFrontAndBack(givenString);

console.log(`The modified string is: ${result}`);
