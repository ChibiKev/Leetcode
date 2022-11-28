/**
 * @param {number} n
 * @return {number[]}
 */
 var getNoZeroIntegers = function(n) {
  for (let index = 1; index <= n/2; index++){
    let firstFound = false;
    let firstValue = index;
    while (firstValue > 0){
      if (firstValue % 10 == 0){
        firstFound = true;
      }
      firstValue = Math.floor(firstValue / 10);
    }
    
    let secondFound = false;
    let secondValue = n - index;
    while (secondValue > 0){
      if (secondValue % 10 == 0){
        secondFound = true;
      }
      secondValue = Math.floor(secondValue / 10);
    }
    
    if (!firstFound && !secondFound){
      return [index, n - index];
    }
  }
  return [];
};