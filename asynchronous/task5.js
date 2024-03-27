// 5. Write a JavaScript program that implements a function that performs a series of asynchronous operations in sequence using Promises and 'async/await'.

// Function that returns a Promise
function sequenceAsyncOperation(task) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(task);
            resolve();
        }, 1000);
    });
}
// Function to perform a series of asynchronous operations in sequence using 'async/await'
async function asyncAwaitOperations() {
    try {
        await sequenceAsyncOperation('Operation 1');
        await sequenceAsyncOperation('Operation 2');
        await sequenceAsyncOperation('Operation 3');
        console.log('All operations completed successfully.');
    } catch (error) {
        console.error('Error during async operations:', error);
    }
}
asyncAwaitOperations();
