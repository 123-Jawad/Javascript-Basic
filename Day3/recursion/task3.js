// 3. Write a JavaScript program to get integers in the range (x, y) using recursion.  



function integersInRange(x, y) {
    if (x <= y) {
        console.log(x);
        integersInRange(x + 1, y);
    }
}

integersInRange(3, 9);
