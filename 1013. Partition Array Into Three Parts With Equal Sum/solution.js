/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var canThreePartsEqualSum = function(arr) {
  let left = arr[0];
  let right = arr[arr.length - 1];
  let total = 0;
  for (let index = 0; index < arr.length; index++){
    let num = arr[index];
    total += num;
  }

  if (total % 3 !== 0){
    return false;
  }

  let leftIndex = 1;
  let rightIndex = arr.length - 2;
  let average = total / 3;
  while (leftIndex < rightIndex){
    if (leftIndex < rightIndex && left !== average){
      left += arr[leftIndex];
      leftIndex += 1;
    }
    if (leftIndex < rightIndex && right !== average){
      right += arr[rightIndex];
      rightIndex -= 1;
    }
    if (left === average && right === average){
      return true;
    }
  }
  return false;
};