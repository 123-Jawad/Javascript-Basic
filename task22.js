// 22. Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.  

function removeCharAtPosition(str, position) {
    let modifiedString = str.slice(0, position) + str.slice(position + 1);
    return modifiedString;
}

// Test the function
let givenString = "notepad";
let positionToRemove = 4;
let result = removeCharAtPosition(givenString, positionToRemove);

console.log(`The modified string is: ${result}`);
