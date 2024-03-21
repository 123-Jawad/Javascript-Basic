// 21. Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.  


function addPyToFront(str) {
    if (str.startsWith("Py")) {
        return str; // Return the original string if it starts with "Py"
    } else {
        return "Py" + str; // Add "Py" in front of any givenstring
    }
}

// Test the function with a given string
let givenString = "thon";
let result = addPyToFront(givenString);

console.log(`The New string is: ${result}`);
