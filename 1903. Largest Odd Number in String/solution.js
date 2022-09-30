/**
 * @param {string} num
 * @return {string}
 */
 var largestOddNumber = function(num) {
  for (let index = num.length - 1; index > -1; index--){
    let value = parseInt(num[index]);
    if (value % 2 == 1){
      return num.slice(0, index + 1);
    }
  }

  return "";
};