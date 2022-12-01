/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var commonFactors = function(a, b) {
  let count = 0;
  let lowest = a;
  if (lowest > b){
    lowest = b;
  }
  
  for (let index = 1; index < lowest + 1; index++){
    if ((a % index == 0) && (b % index == 0)){
      count += 1;
    }
  }
  
  return count;
};