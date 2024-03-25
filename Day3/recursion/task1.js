// 1. Write a JavaScript program to calculate the factorial of a number.  


function factorial(Number){
    if(Number === 0 || Number === 1){
        return 1;
    }else{
        return Number *factorial(Number-1);
    }
}
let num = 5;
let result = factorial(num);
console.log(result);