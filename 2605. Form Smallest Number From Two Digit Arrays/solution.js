/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function(nums1, nums2) {
  let storage = new Array(9).fill(0);
  let num1Min = 10;
  let num2Min = 10;
  for (let index = 0; index < nums1.length; index++){
    let num = nums1[index];
    storage[num - 1] += 1;
    if (num < num1Min){
      num1Min = num;
    }
  }
  for (let index = 0; index < nums2.length; index++){
    let num = nums2[index];
    storage[num - 1] += 1;
    if (num < num2Min){
      num2Min = num;
    }
  }
  
  for (let index = 0; index < storage.length; index++){
    let num = storage[index];
    if (num >= 2){
      return index + 1;
    }
  }
  
  if (num1Min > num2Min){
    return (num2Min * 10) + num1Min;
  }
  
  return (num1Min * 10) + num2Min;
};