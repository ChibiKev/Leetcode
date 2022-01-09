/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var canMakeArithmeticProgression = function(arr) {
  arr.sort(function(a,b){return a - b});
  difference = arr[1] - arr[0];
  
  for (let index = 0; index < arr.length - 1; index++){
    value = arr[index];
    nextValue = arr[index + 1];
    if (nextValue - value != difference){
      return false;
    }
  }

  return true;
};