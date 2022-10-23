/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var numberOfPairs = function(nums) {
  let result = [0, 0];
  let dictionary = {};
  for (let num of nums){
    dictionary[num] = (dictionary[num] || 0) + 1;
  }

  for (let num in dictionary){
    result[0] += Math.floor(dictionary[num] / 2);
    if (dictionary[num] % 2 == 1){
      result[1] += 1;
    }
  }

  return result;
};