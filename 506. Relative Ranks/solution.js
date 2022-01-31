/**
 * @param {number[]} score
 * @return {string[]}
 */
 var findRelativeRanks = function(score) {
  let myDict = {};
  for (let index in score){
    let number = score[index];
    myDict[number] = index;
  }

  let count = score.length;
  let result = new Array(count).fill("");

  let keys = Object.keys(myDict).sort(function(a,b){return a - b});
  
  for (let key of keys){
    if (count === 3){
      result[myDict[key]] = "Bronze Medal";
    }
    else if (count === 2){
      result[myDict[key]] = "Silver Medal";
    }
    else if (count === 1){
      result[myDict[key]] = "Gold Medal";
    }
    else{
      result[myDict[key]] = count.toString();
    }
    count -= 1;
  }
  
  return result;
};