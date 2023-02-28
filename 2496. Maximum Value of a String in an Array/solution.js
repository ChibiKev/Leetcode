/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
  let result = 0;
  for (let index = 0; index < strs.length; index++){
    let currentCount = strs[index].length;
    if (!isNaN(strs[index])){
      currentCount = parseInt(strs[index]);
    }
    if (currentCount > result){
      result = currentCount;
    }
  }
  return result;
};