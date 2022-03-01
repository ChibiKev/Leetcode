/**
 * @param {number[]} nums
 * @return {number}
 */
 var repeatedNTimes = function(nums) {
  let recordedNums = new Set();
  for (let num of nums){
    if (recordedNums.has(num)){
      return num;
    }
    recordedNums.add(num);
  }
};