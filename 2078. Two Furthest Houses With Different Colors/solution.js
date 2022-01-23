/**
 * @param {number[]} colors
 * @return {number}
 */
 var maxDistance = function(colors) {
  let furthestFromStart = colors.length - 1;
  let furthestFromEnd = 0;
  while (colors[furthestFromStart] == colors[0]){
    furthestFromStart -= 1;
  }
  while (colors[furthestFromEnd] == colors[colors.length - 1]){
    furthestFromEnd += 1;
  }

  return Math.max(colors.length - 1 - furthestFromEnd, furthestFromStart);
};