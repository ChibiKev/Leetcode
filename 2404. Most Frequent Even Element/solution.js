/**
 * @param {number[]} nums
 * @return {number}
 */
 var mostFrequentEven = function(nums) {
  let dictionary = {};
  for (let num of nums){
    dictionary[num] = (dictionary[num] || 0) + 1;
  }
  
  let minimumValue = -1;
  let maximumFrequency = 0;

  for (let num in dictionary){
    if (num % 2 == 0){
      if (dictionary[num] > maximumFrequency){
        minimumValue = num;
        maximumFrequency = dictionary[num];
      }
      else if (dictionary[num] == maximumFrequency){
        if (+num < +minimumValue){
          minimumValue = num;
        }
      }
    }
  }

  return minimumValue;
};