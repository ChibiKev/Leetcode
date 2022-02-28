/**
 * @param {number[]} heights
 * @return {number}
 */
 var heightChecker = function(heights) {
  let sortedHeights = [...heights]
  sortedHeights.sort(function(a, b){return a-b});
  let result = 0;
  for (let index = 0; index < heights.length; index++){
    if (sortedHeights[index] !== heights[index]){
      result += 1;
    }
  }

  return result;
};