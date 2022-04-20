/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var replaceElements = function(arr) {
  let largest = -1;
  for (let index = arr.length - 1; index > -1; index--){
    let current = arr[index];
    arr[index] = largest;
    if (current > largest){
      largest = current;
    }
  }
  
  return arr;
};