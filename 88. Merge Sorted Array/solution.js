/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let nums1Index = m - 1;
  let nums2Index = n - 1;
  let insertIndex = m + n - 1;

  while (insertIndex >= 0 && nums2Index >= 0){
    if (nums1Index >= 0 && nums1[nums1Index] > nums2[nums2Index]){
      nums1[insertIndex] = nums1[nums1Index];
      nums1Index -= 1;
    }
    else{
      nums1[insertIndex] = nums2[nums2Index];
      nums2Index -= 1;
    }
    insertIndex -= 1;
  }
  return nums1;
};