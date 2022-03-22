/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
 var canBeEqual = function(target, arr) {
  let sortedTarget = target.sort(function(a, b){return a-b});
  let sortedArr = arr.sort(function(a, b){return a-b});
  
  for (let index = 0; index < sortedTarget.length; index++){
    if (sortedTarget[index] !== sortedArr[index]){
      return false;
    }
  }
  return true;
};