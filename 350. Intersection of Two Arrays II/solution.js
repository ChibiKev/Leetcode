/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
  let nums1Dictionary = {};
  let result = [];

  for (let num of nums1){
    nums1Dictionary[num] = (nums1Dictionary[num] || 0) + 1;
  }
  
  for (let num of nums2){
    if (nums1Dictionary[num] > 0){
      result.push(num);
      nums1Dictionary[num] -= 1;
    }
  }

  return result;
};