/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 var duplicateZeros = function(arr) {
  let totalZeros = 0;
  for (let number of arr){
    if (number === 0){
      totalZeros += 1;
    }
  }

  for (let index = arr.length - 1; index > -1; index--){
    let number = arr[index];
    if (index + totalZeros < arr.length){
      arr[index + totalZeros] = number;
    }
    if (number === 0){
      totalZeros -= 1;
      if (index + totalZeros < arr.length){
        arr[index + totalZeros] = 0;
      }
    }
  }
};