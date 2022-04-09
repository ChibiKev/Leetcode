/**
 * @param {number[]} nums
 * @return {number}
 */
 var sumOfUnique = function(nums) {
  let numsDictionary = {};
  for (let num of nums){
    numsDictionary[num] = (numsDictionary[num] || 0) + 1;
  }

  let total = 0;
  for (let num in numsDictionary){
    if (numsDictionary[num] === 1){
      total += +num;
    }   
  }

  return total;
};