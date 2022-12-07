/**
 * @param {number} n
 * @return {boolean}
 */
 var isThree = function(n) {
  let count = 2;
  for (let index = 2; index < n; index++){
    if (n % index == 0){
      count += 1;
    }
  }
  return count == 3;
};