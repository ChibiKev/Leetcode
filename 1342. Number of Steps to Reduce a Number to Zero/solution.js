/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
  let count = 0;
  let tempNumber = num;

  while (tempNumber > 0){
    if (tempNumber % 2 == 0){
      tempNumber /= 2;
    }
    else{
      tempNumber -= 1;
    }
    count += 1;
  }
  
  return count;
};