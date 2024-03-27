// 20. Write a JavaScript program to find duplicate values in a JavaScript array.

function findDuplicates(arr) {
    const duplicates = {};
    const duplicateValues = [];
  
    for (let element of arr) {
      if (duplicates[element]) {
        if (!duplicateValues.includes(element)) {
          duplicateValues.push(element);
        }
      } else {
        duplicates[element] = true;
      }
    } 
    return duplicateValues;
  }
  
  const array = [1, 2, 3, 2, 4, 5, 3, 6];
  const duplicates = findDuplicates(array);
  
  console.log('Original Array:', array);
  console.log('Duplicate Values:', duplicates); 
  