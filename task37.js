// 37. Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.  

function manipulatestring(inputstring){
    if(inputstring.length >=3){
        let firstThreeletter = inputstring.substring(0,3).toLowerCase();
        let remainingchar = inputstring.substring(3).toUpperCase();
        return firstThreeletter + remainingchar;
    }else{
       return inputstring;
    }
}

let givenstring= "example";
let result = manipulatestring(givenstring);
console.log(`modified string ${result}`);