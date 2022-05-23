/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var validMountainArray = function(arr) {
  let increasing = false;
  let decreasing = false;
  for (let index = 1; index < arr.length; index++){
    let num = arr[index];
    if (arr[index - 1] < num && !decreasing){
      increasing = true;
    }
    else if (arr[index - 1] > num && increasing){
      decreasing = true;
    }
    else{
      return false;
    }
  }
  if (increasing && decreasing){
    return true;
  }
  return false;
};