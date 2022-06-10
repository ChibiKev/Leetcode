/**
 * @param {number[][]} rectangles
 * @return {number}
 */
 var countGoodRectangles = function(rectangles) {
  let count = 0;
  let maxLen = 0;
  for (let index = 0; index < rectangles.length; index++){
    let rectangle = rectangles[index];
    let minLen = rectangle[0];
    if (minLen > rectangle[1]){
      minLen = rectangle[1];
    }
    if (minLen > maxLen){
      maxLen = minLen;
      count = 1;
    }
    else if (minLen === maxLen){
      count += 1;
    }
  }

  return count;
};