/**
 * @param {number[]} arr
 * @return {number}
 */
 var trimMean = function(arr) {
  let fivePercent = arr.length / 20;
  let adjustedArr = arr.sort(function(a, b){return a-b});
  let totalSum = 0;
  for (let index = fivePercent; index < adjustedArr.length - fivePercent; index++){
    let num = adjustedArr[index];
    totalSum += num;
  }
  
  return totalSum / (adjustedArr.length - (2 * fivePercent));
};