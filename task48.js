// 48. Write a JavaScript program to reverse a given string.  


function reverseString(str){
    return  str.split('').reverse().join('');
}
let givenString = 'Hello';
let reversedString = reverseString(givenString);
console.log(reversedString);