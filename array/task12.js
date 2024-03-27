// 12. Write a JavaScript program to compute the sum and product of an array of integers.

function computeSumAndProduct(arr) {
    let sum = 0;
    let product = 1;
  
    for (let num of arr) {
      sum += num;
      product *= num;
    }
  
    return { sum, product };
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const result = computeSumAndProduct(numbers);
  
  console.log('Array:', numbers);
  console.log('Sum:', result.sum);
  console.log('Product:', result.product); 
  