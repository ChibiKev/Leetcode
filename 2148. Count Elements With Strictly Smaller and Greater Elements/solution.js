/**
 * @param {number[]} nums
 * @return {number}
 */
 var countElements = function(nums) {
  let minimum = Infinity;
  let maximum = -Infinity;
  for (let num of nums){
    if (num > maximum){
      maximum = num;
    }
    if (num < minimum){
      minimum = num;
    }
  }

  let count = 0;
  for (let num of nums){
    if (num < maximum && num > minimum){
      count += 1;
    }
  }

  return count;
};