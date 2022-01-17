/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var arrayRankTransform = function(arr) {
  let sortedArray = [...arr].sort(function(a,b){return a - b});
  let myDict = {};
  let rank = 1;
  let result = [];

  for (let value of sortedArray){
    if (myDict[value] == undefined){
      myDict[value] = rank;
      rank += 1;
    }
  }
  
  for (let value of arr){
    result.push(myDict[value]);
  }
    
  return result;
};