// 10. Write a JavaScript program to construct the following pattern, using a nested for loop.

const numrow =8;
for(i=1; i<=numrow; i++){
    let pattern = '';
    for(j=1; j<=i; j++){
        pattern +="*";
    }
    console.log(pattern);
}
