/**
 * @param {number} num
 * @return {boolean}
 */
 var isPerfectSquare = function(num) {
  if (num == 1){
    return true;
  }
  
  let left = 1;
  let middle = Math.floor(num / 2);
  let right = num;
  
  while (left <= right){
    let squareroot = num / middle;
    if (squareroot == middle){
      return true;
    }
    else if (squareroot > middle){
      left = middle + 1;
    }
    else if (squareroot < middle){
      right = middle - 1;
    }
    middle = left + Math.floor((right - left) / 2);
  }

  return false;
};