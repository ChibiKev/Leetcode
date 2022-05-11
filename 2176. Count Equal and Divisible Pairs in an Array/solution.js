/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var countPairs = function(nums, k) {
  let count = 0;
  let myDict = {};
  for (let index = 0; index < nums.length; index++){
    let num = nums[index];
    if (myDict[num]){
      myDict[num].push(index);
    }
    else{
      myDict[num] = [index];
    }
  }
  
  for (let num in myDict){
    let values = myDict[num];
    for (let index = 0; index < values.length - 1; index++){
      let mainIndex = values[index];
      for (let secondIndex = index + 1; secondIndex < values.length; secondIndex++){
        let otherIndex = values[secondIndex];
        if ((mainIndex * otherIndex) % k === 0){
          count += 1;
        }
      }
    }
  }

  return count;
};