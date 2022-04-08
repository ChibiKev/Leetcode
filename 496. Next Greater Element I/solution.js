/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
  let myDict = {};
  let stack = [];
  let result = [];

  for (let num of nums2){
    while ((stack.length > 0) && (stack[stack.length - 1] < num)){
      myDict[stack.pop()] = num;
    }
    stack.push(num);
  }


  for (let num of nums1){
    let highest = -1;
    if (myDict[num] !== undefined){
      highest = myDict[num];
    }
    result.push(highest);
  }

  return result;
};