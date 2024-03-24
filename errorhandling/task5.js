// 5. Write a JavaScript function that takes an array as a parameter and throws a custom 'Error' if the array is empty.


function checkArrayEmpty(arr){
    if(arr.length===0){
        throw new Error("Array is empty")
    }return arr;
}
try{
    let num1 = [1, 2, 3, 4];
    checkArrayEmpty(num1);
    let num2 =[];
    checkArrayEmpty(num2);
}catch(error){
    console.log("Error:", error.message);
}
