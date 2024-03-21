// 7. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.  

for(let year = 2014; year <= 2050; year++){
    let januaryFirst = new Date(year, 0 , 1);

    if(januaryFirst.getDay()===0){
        console.log(`January 1st, ${year} will be a sunday.`);
    }
}