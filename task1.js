// 1. Write a JavaScript program to display the current day and time in the following format.  


let currentDate = new Date();

let daysOfWeek = ['sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

let dayOfWeek = daysOfWeek[currentDate.getDay()];

let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

let period = hours>=12 ? "PM":"Am";


hours =hours %12 || 12;

minutes = minutes < 10 ? '0' +minutes :minutes;
seconds = seconds < 10 ? '0' + seconds : seconds;

console.log(`Today is: ${dayOfWeek}.`);
console.log(`Current time is :${hours}:${minutes} :${seconds}  ${period} `);