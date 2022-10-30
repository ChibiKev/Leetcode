/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
 var answerQueries = function(nums, queries) {
  let sortedNums = nums.sort(function(a, b){return a-b});
  let total = 0;
  let sumList = [];
  for (let index = 0; index < sortedNums.length; index++){
    let num = sortedNums[index];
    total += num;
    sumList.push(total);
  }
  
  let result = new Array(queries.length).fill(0);
  for (let queriesIndex = 0; queriesIndex < queries.length; queriesIndex++){
    let query = queries[queriesIndex];
    for (let sumIndex = 0; sumIndex < sumList.length; sumIndex++){
      let sums = sumList[sumIndex];
      if (sums <= query){
        result[queriesIndex] = sumIndex + 1;
      }
    }
  }
      
  return result;
};