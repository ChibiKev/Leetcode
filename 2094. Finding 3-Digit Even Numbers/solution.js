/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var findEvenNumbers = function(digits) {
  let total = new Array(10).fill(0);
  for (let number of digits){
    total[number] += 1;
  }
  let result = [];
  for (let hundreds = 1; hundreds < 10; hundreds++){
    if (total[hundreds] === 0){
      continue;
    }
    total[hundreds] -= 1;
    for (let tens = 0; tens < 10; tens++){
      if (total[tens] === 0){
        continue;
      }
      total[tens] -= 1;
      for (let ones = 0; ones < 10; ones+=2){
        if (total[ones] === 0){
          continue;
        }
        total[ones] -= 1;
        result.push(hundreds * 100 + tens * 10 + ones)
        total[ones] += 1;
      }
      total[tens] += 1;
    }
    total[hundreds] += 1;
  }
  return result;
};