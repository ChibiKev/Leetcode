/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
 var findKthPositive = function(arr, k) {
  let amountMissing = 0;
  let storedNumber = arr[arr.length - 1] + 1;
  let lastNumber = 0;
  for (let index in arr){
    let number = arr[index];
    let difference = number - lastNumber;

    if (difference !== 1){
      amountMissing += difference - 1;
    }
      
    if (amountMissing >= k){
      storedNumber = number;
      break;
    }

    lastNumber = number;
  }

  amountMissing = k - amountMissing - 1;
  return storedNumber + amountMissing;
};