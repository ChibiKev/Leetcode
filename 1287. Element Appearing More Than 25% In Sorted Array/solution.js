/**
 * @param {number[]} arr
 * @return {number}
 */
 var findSpecialInteger = function(arr) {
  let arrLength = arr.length;
  let split = Math.floor(arrLength / 4);

  for (let index = 0; index < arrLength - split; index++){
    let current = arr[index];
    let end = arr[index + split];
    if (current === end){
      return current;
    }
  }
  
  return -1;
};