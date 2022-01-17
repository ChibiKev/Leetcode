/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var sortByBits = function(arr) {
  arr.sort(function(a,b){return a - b});
  arr.sort(function(a, b){return a.toString(2).replaceAll('0','') - b.toString(2).replaceAll('0','')});
  return arr;
};