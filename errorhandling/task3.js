// 3. Write a JavaScript function that accepts two numbers as parameters and throws a custom 'Error' if the second number is zero.

function divideNumber(num1, num2){
    if(num2 ===0){
        throw new Error("Division by zero is not allowed");
    }
    return num1/num2;
}

try{
    let result =divideNumber(10,2);
    console.log("Result:", result);

    result = divideNumber(20, 0);
}
catch(error){
    console.log("Error:", error.message);
}