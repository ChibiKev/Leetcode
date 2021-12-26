/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
 var kthDistinct = function(arr, k) {
  let dictionary = {};
  for (let letters of arr){
    dictionary[letters] = (dictionary[letters] || 0) + 1;
  }
  
  for (let letters of arr){
    if(dictionary[letters] === 1){
      if(k > 1){
        k--;
      }
      else if(k === 1){
        return letters;
      }
    }
  }
  return "";
};