/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
 var containsPattern = function(arr, m, k) {
  for (let index = 0; index < arr.length; index++){
    let current = arr.slice(index, index + m);
    let count = 1;
    let nextIndex = index + m;
    while (JSON.stringify(current) === JSON.stringify(arr.slice(nextIndex, nextIndex + m))){
      count += 1;
      nextIndex += m;
      if (count === k){
        return true;
      }
    }
  }
  return false;
};