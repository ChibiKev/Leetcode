/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function(n) {
  let timesTwo = n * 2;
  let timesThree = n * 3;
  let concat = n.toString() + timesTwo.toString() + timesThree.toString();
  let concatSet = new Set(concat);
  return (concatSet.size == 9) && (concat.length == 9) && (!concatSet.has('0'));
};