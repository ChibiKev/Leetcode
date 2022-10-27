/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
 var arithmeticTriplets = function(nums, diff) {
  let mySet = new Set(nums);
  let count = 0;
  for (let num of mySet){
    if (mySet.has(num + diff) && mySet.has(num + diff + diff)){
      count += 1;
    }
  }

  return count;
};