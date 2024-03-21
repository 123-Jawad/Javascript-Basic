// 27. Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.  

function checkStringStartsWithJava(str) {
    if (str.startsWith('Java')) {
        return `The string "${str}" starts with 'Java'.`;
    } else {
        return `The string "${str}" does not start with 'Java'.`;
    }
}

let givenString = "JavaScript";
let result = checkStringStartsWithJava(givenString);

console.log(result);
