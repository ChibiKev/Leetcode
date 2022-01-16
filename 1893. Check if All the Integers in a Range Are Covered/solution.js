/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
 var isCovered = function(ranges, left, right) {
  ranges = ranges.sort(function(a, b){return a[0]-b[0]});
  
  for (let range of ranges){
    if (range[0] <= left && left <= range[1]){
      left = range[1] + 1;
    }
    if (range[0] <= right && right <= range[1]){
      right = range[0] - 1;
    }
      
    if (right < left){
      return true;
    }
  }

  return false;
};