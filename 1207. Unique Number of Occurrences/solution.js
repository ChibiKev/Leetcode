/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var uniqueOccurrences = function(arr) {
  let dictionary = {};
  for (let num of arr){
    dictionary[num] = (dictionary[num] || 0) + 1;
  }

  let mySet = new Set();
  for (let num in dictionary){
    mySet.add(dictionary[num]);
  }

  return mySet.size === Object.keys(dictionary).length;
};