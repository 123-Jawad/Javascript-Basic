// 6. Write a JavaScript program to determine whether a given year is a leap year in calender


function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100!== 0)) {
        return true;
    } else {
        return false;
    }
}

// Test the function with year

let yearToCheck = 2024;
if (isLeapYear(yearToCheck)) {
    console.log(`${yearToCheck} is a Leap year`);
} else {
    console.log(`${yearToCheck} is not a leap year`)
};