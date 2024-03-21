// 32. Write a JavaScript program to find the closest value to 100 from two numerical values.  

function closeTo100(num1 ,num2){
    const targetValue =100;

    let difference1 = Math.abs (num1 - targetValue);
    let difference2 = Math.abs (num2 - targetValue);

    if(difference1 <difference2){
        return num1;
    }if(difference2 < difference1){
        return num2;
    }else{
        return('both value are close to 100')
    }
} 

let value1 =90;
let value2 = 20;
let result = closeTo100(value1 , value2);
console.log(`the value close to 100 is ${result}`);