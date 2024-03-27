// 8. Write a JavaScript program to implement a function that executes a given function repeatedly at a fixed interval using 'setInterval()'.

function repeatedlyExecute(func, interval) {
    // Initial execution of the function
    func();

    // Set interval to execute the function repeatedly
    const intervalId = setInterval(func, interval);
    return intervalId;
}

function sayWord() {
    console.log('Programmer Force!');
}

const intervalId = repeatedlyExecute(sayWord, 2000);