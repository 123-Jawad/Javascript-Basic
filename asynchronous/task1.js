// 1. Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

function delaycallback(callback){
    setTimeout(callback,2000);
}

function newcallback(){
    console.log(`callback after 2 seconds`);
}
delaycallback(newcallback);