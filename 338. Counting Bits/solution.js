/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
  let result = [];
  for (let index = 0; index < n + 1; index++){
    let total = 0;
    let num = index;
    
    while (num != 0){
      total += num % 2;
      num = Math.floor(num / 2);
    }
    result.push(total);
  }

  return result;
};