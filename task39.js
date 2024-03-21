// 39. Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.  

function computeSum(num1, num2){
    let sum =num1 +num2;
    if(sum >=50 && sum <=80 ){
        return 65;
    }else{
        return 80;
    }
}

let num1 = 30;
let num2 =90;
let result = computeSum(num1,num2);
console.log(`the sum of ${num1} and ${num2} is in the range of 50..80 ${result}`)
