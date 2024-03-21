// 9. Write a JavaScript program to calculate the days left before Christmas.  

// get current date
let currentDate = new Date();

// get current years 
let currentYear = currentDate.getFullYear();

// set the chritmas date is 25 on Dec and in index of month is 11

let christmasDay = new Date(currentYear, 11 ,25);

// calculate the difference in millisecond between current date or chritmas day

let timeDiffer = currentDate.getTime() - christmasDay.getTime();

let dayleft =Math.ceil(timeDiffer / (1000 * 360 *24));

console.log(`There are ${dayleft} days left until chritmas`);
