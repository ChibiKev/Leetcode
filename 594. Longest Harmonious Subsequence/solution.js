/**
 * @param {number[]} nums
 * @return {number}
 */
 var findLHS = function(nums) {
  let dictionary = {};
  for (let num of nums){
    dictionary[num] = (dictionary[num] || 0) + 1;
  }

  let maxValue = 0;
  for (let key in dictionary){
    if(dictionary[+key + 1]){
      let count = dictionary[key] + dictionary[+key + 1];
      if (count > maxValue){
        maxValue = count;
      }
    }
  }

  return maxValue;
};