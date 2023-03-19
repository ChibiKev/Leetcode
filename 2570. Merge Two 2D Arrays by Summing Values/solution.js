/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
  let dictionary = {};
  for (let index = 0; index < nums1.length; index++){
    let nums = nums1[index];
    let key = nums[0];
    let value = nums[1];
    dictionary[key] = (dictionary[key] || 0) + value;
  }

  for (let index = 0; index < nums2.length; index++){
    let nums = nums2[index];
    let key = nums[0];
    let value = nums[1];
    dictionary[key] = (dictionary[key] || 0) + value;
  }

  let result = [];
  let keys = Object.keys(dictionary);
  keys.sort(function(a, b){return a-b});
  
  for (let index = 0; index < keys.length; index++){
    result.push([keys[index], dictionary[keys[index]]]);
  }
  
  return result;
};