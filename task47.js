// 47. Write a JavaScript program to check whether a given number exists in the range 40..10000.  


function checkInRange(num1) {
    return num1 >= 40 && num1 <= 10000;
}

let num1 = 9999;
if (checkInRange(num1)) {
    console.log(num1 + " exists in between 40 to 10000.");
} else {
    console.log(num1 + " does not exist in between 40 to 10000.");
}
