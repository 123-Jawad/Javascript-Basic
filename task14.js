// 14. Write a JavaScript exercise to get the filename extension.  


function getFileExtension(filename){
    // split the file by dot to get array parts
    let parts = filename.split('.');

    let extension = parts[parts.length -1];

    return extension;
}
// test the function
let filename = 'notepad.txt';
let extension = getFileExtension(filename);
console.log(`the file extension of: "${filename}" is the "${extension}" `);
