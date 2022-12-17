/**
 * @param {number} num
 * @return {boolean}
 */
 var checkPerfectNumber = function(num) {
  if (num == 1){
    return false;
  }

  let total = 1;
  for (let index = 2; index < Math.floor(Math.sqrt(num)) + 1; index++){
    if (num % index == 0){
      total += index + num / index;
    }
  }
  
  return total == num;
};