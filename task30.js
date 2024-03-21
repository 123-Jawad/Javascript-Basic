// 30. Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.  

function checkAndRemoveScript(str) {
    if (str.length >= 5 && str.slice(4, 10) === "Script") {
        return str.slice(0, 4) + str.slice(10); // remove "script" from the string
    } else {
        return str; 
    }
}

// Test the function with a given string
let givenString = "JavaScript";
let result = checkAndRemoveScript(givenString);

console.log(`The modified string is: ${result}`);
