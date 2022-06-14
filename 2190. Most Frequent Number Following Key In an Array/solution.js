/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
 var mostFrequent = function(nums, key) {
  let dictionary = {};
  let count = 0;
  let result = nums[0];
  for (let index = 0; index < nums.length - 1; index++){
    let num = nums[index];
    if (num === key){
      let nextNum = nums[index + 1];
      dictionary[nextNum] = (dictionary[nextNum] || 0) + 1;
      if (dictionary[nextNum] > count){
        count = dictionary[nextNum];
        result = nextNum;
      }
    }
  }

  return result;
};