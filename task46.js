// 46. Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.  


function checkMultiple(num1 , num2){
    if((num1 % 7===0  || num1 % 11===0) && (num2 % 7===0 || num2 % 11 ===0)){
        return true;
    }

    return false;
}

let num1 = 7;
let num2 =17;
if(checkMultiple(num1,num2)){
    console.log("one of the number multiple on 7 or 11 but not both");
}else{
    console.log("Niether of the number multiple on 7 or 11");
}
