// 12. Write a JavaScript program to sum 3 and 5 multiples under 1000.

function calSum(limit) {
    let sum = 0;
    for (i = 1; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}
let limit = 1000;
let result = calSum(limit);
console.log(result);
