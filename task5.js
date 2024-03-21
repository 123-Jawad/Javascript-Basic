// Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.  


let str = ['w','3','r','e','s','o','u','r','c','e','s'];

let rotatestring = str.join('');

let length = rotatestring.length;

function rotatebyone () {
    rotatestring = rotatestring[length-1] + rotatestring.substring(0,length-1);
}

for(let i = 0; i <length; i++){
    console.log(rotatestring);
    rotatebyone();
}


