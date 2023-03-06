/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
  let nums1Index = 0;
  let nums2Index = 0;
  let result = -1;
  while (nums1Index < nums1.length && nums2Index < nums2.length){
    let nums1Value = nums1[nums1Index];
    let nums2Value = nums2[nums2Index];
    if (nums1Value == nums2Value){
      result = nums1Value;
      break;
    }
    else if (nums1Value > nums2Value){
      nums2Index += 1;
    }
    else if (nums1Value < nums2Value){
      nums1Index += 1;
    }
  }
  return result;
};