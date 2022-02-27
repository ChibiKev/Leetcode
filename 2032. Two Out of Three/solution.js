/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
 var twoOutOfThree = function(nums1, nums2, nums3) {
  let nums1Set = new Set();
  let nums3Set = new Set();
  let result = new Set();
  for (let num of nums1){
    nums1Set.add(num);
  }
  for (let num of nums3){
    nums3Set.add(num);
  }
  for (let num of nums2){
    if (nums1Set.has(num)){
      result.add(num);
    }
    if (nums3Set.has(num)){
      result.add(num);
    }
  }
  for (let num of nums1Set){
    if (nums3Set.has(num)){
      result.add(num);
    }
  }

  return [...result];
};