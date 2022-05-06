/**
 * @param {number[]} arr
 * @return {number}
 */
 var findLucky = function(arr) {
  let dictionary = {};
  for (let num of arr){
    dictionary[num] = (dictionary[num] || 0) + 1;
  }

  let maxValue = -1;
  for (let num in dictionary){
    if (num == dictionary[num] && dictionary[num] > maxValue){
      maxValue = dictionary[num];
    }
  }
  return maxValue;
};