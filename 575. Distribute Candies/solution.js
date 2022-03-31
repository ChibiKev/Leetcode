/**
 * @param {number[]} candyType
 * @return {number}
 */
 var distributeCandies = function(candyType) {
  let candyTypeSet = new Set(candyType);
  let maximumCandy = candyType.length / 2;
  return Math.min(maximumCandy, candyTypeSet.size);
};