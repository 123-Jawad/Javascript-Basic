// 7. Write a JavaScript program to check whether a number is even or not.  


function isEvenOrOdd(number){
    if(number % 2 ===0){
        return ("The Given Number is Even");
    }if(number%2 ===1){
        return ("The Given Number is Odd");
    }
}
let number =17;
let result = isEvenOrOdd(number);
console.log(result);