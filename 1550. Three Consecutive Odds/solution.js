/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var threeConsecutiveOdds = function(arr) {
  let count = 0;
  for (let number of arr){
    if (number % 2 === 1){
      count += 1;
      if (count === 3){
        return true;
      }
    }
    else{
      count = 0;
    }
  }

  return false;
};