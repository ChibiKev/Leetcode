/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortEvenOdd = function(nums) {
  let oddIndex = [];
  let evenIndex = [];
  for (let index = 0; index < nums.length; index++){
    let num = nums[index];
    if (index % 2 === 0){
      evenIndex.push(num);
    }
    else{
      oddIndex.push(num);
    }
  }
  
  oddIndex.sort(function(a, b){return b-a});
  evenIndex.sort(function(a, b){return a-b});

  let result = [];
  for (let index = 0; index < oddIndex.length; index++){
    let even = evenIndex[index];
    let odd = oddIndex[index];
    result.push(even);
    result.push(odd);
  }
  
  if (nums.length % 2 !== 0){
    result.push(evenIndex[evenIndex.length - 1]);
  }

  return result;
};