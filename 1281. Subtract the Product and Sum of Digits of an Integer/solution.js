/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  let values = [];
  let tempNumber = n;
  while (tempNumber > 0){
    values.push(tempNumber % 10);
    tempNumber = Math.floor(tempNumber / 10);
  }

  let product = 1;
  let totalSum = 0;
  for (let index = 0; index < values.length; index++){
    let value = values[index];
    product *= value;
    totalSum += value;
  }
  
  return product - totalSum;
};