// 35. Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.  


function checkPosition (str, char){
    let newString = str.substring(1,4);
    newString.split("");
    for(let i=0; i < newString.length; i++){
        if(char===newString[i]){
            console.log("matched");
            return;
        }
    }
    console.log("dont match")
}
checkPosition("example", "l");