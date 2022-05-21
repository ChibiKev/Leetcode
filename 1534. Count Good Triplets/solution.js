/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
 var countGoodTriplets = function(arr, a, b, c) {
  let sizeOfArr = arr.length;
  let count = 0;
  for (let i = 0; i < sizeOfArr - 2; i++){
    for (let j = i + 1; j < sizeOfArr - 1; j++){
      for (let k = j + 1; k < sizeOfArr; k++){
        if (Math.abs(arr[i] - arr[j]) <= a && Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c){
          count += 1;
        }
      }
    }
  }
  return count;
};