/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  let result = [];
  let maxCandies = 0;
  for (let index = 0; index < candies.length; index++){
    let candy = candies[index];
    if (candy > maxCandies){
      maxCandies = candy;
    }
  }
  
  for (let index = 0; index < candies.length; index++){
    let candy = candies[index];
    let totalCandy = candy + extraCandies;
    if (totalCandy >= maxCandies){
      result.push(true);
    }
    else{
      result.push(false);
    }
  }
  
  return result;
};