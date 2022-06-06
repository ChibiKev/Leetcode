/**
 * @param {number[]} arr
 * @return {number[][]}
 */
 var minimumAbsDifference = function(arr) {
  let absoluteDifference = Infinity;
  let result = [];
  arr.sort(function(a, b){return a-b});
  for (let index = 0; index < arr.length - 1; index++){
    if (arr[index + 1] - arr[index] < absoluteDifference){
      result = [[arr[index], arr[index + 1]]];
      absoluteDifference = arr[index + 1] - arr[index];
    }
    else if (arr[index + 1] - arr[index] === absoluteDifference){
      result.push([arr[index], arr[index + 1]]);
    }
  }

  return result;
};