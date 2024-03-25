function largestNum(num1, num2, num3, num4, num5) {
    let largest = num1;

    if (num2 > largest) {
        largest = num2;
    }
    if (num3 > largest) {
        largest = num3;
    }
    if (num4 > largest) {
        largest = num4;
    }
    if (num5 > largest) {
        largest = num5;
    }

    return largest;
}

let num1 = 5;
let num2 = 15;
let num3 = 12;
let num4 = 35;
let num5 = 31;

let largestNumber = largestNum(num1, num2, num3, num4, num5);
console.log(largestNumber);