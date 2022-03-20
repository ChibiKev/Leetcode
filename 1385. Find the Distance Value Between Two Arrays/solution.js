/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
 var findTheDistanceValue = function(arr1, arr2, d) {
  arr1.sort(function(a, b){return a-b});
  arr2.sort(function(a, b){return a-b});
  let arr1Index = 0;
  let arr2Index = 0;
  let result = 0;
  while (arr1Index < arr1.length && arr2Index < arr2.length){
    let arr1Num = arr1[arr1Index];
    let arr2Num = arr2[arr2Index];
    if (Math.abs(arr1Num - arr2Num) > d){
      if (arr1Num >= arr2Num){
        arr2Index += 1;
        continue;
      }
      else{
        result += 1;
      }
    }
    arr1Index += 1;
  }

  result += arr1.length - arr1Index;
  return result;
};