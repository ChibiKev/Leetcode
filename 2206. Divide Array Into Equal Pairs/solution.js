/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var divideArray = function(nums) {
  let dictionary = {};
  for (let num of nums){
    dictionary[num] = (dictionary[num] || 0) + 1;
  }

  for (let num in dictionary){
    if (dictionary[num] % 2 != 0){
      return false;
    }
  }

  return true;
};