// 23. Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1

function changeFirstAndLast(str) {
    if (str.length >= 1) {
        let firstChar = str.charAt(0);
        let lastChar = str.charAt(str.length - 1);
        return lastChar + firstChar;
    } else {
        return str; // Return the same string if its length is less than 1
    }
}

// Test the function with a given string
let givenString = "jawad";
let result = changeFirstAndLast(givenString);

console.log(`The modified string is: ${result}`);
