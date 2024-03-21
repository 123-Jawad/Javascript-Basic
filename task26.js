function createNewString(str) {
    if (str.length < 3) {
        return str; // Return the original string if its length is less than 3
    }

    let lastThreeChars = str.slice(-3); // Get the last 3 characters of the string
    
    let newString = lastThreeChars + str + lastThreeChars; // Create the new string
    return newString;
}

// Test the function with a given string
let givenString = "example";
let result = createNewString(givenString);

console.log(`The new string is: ${result}`);
