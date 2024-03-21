// 8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched". 

let givennumber =4;
let randomNumber = Math.floor(Math.random()* 10) +1;
console.log(randomNumber);

// Prompt the user to input a guess number

let userGuess = parseInt(givennumber);


if(userGuess === randomNumber){
    console.log("Good work! You guess the correct number ");
}else{
    console.log("Not Matched Try again");
}