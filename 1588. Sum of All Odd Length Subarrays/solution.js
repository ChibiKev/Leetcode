/**
 * @param {number[]} arr
 * @return {number}
 */
 var sumOddLengthSubarrays = function(arr) {
  let total = 0;
  let arrLength = arr.length;
  for (let index = 0; index < arr.length; index++){
    let num = arr[index];
    let totalAdded = Math.floor(((index + 1) * (arrLength - index) + 1) / 2);
    total += totalAdded * num;
  }
  return total;
};