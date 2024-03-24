// 4. Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is negative.


function negativeNumber(number){
    if(number < 0){
        throw new error(`Error: Negative number not allowed`);
    }
    return number;
}
try{
    let number = 9;
    let result = negativeNumber(number);
    console.log("Result:", result);
}catch(error){
    console.log("Error:", error.message);
}

