/**
 * @param {number} num
 * @return {number}
 */
 var maximum69Number  = function(num) {
  let numString = num.toString();
  for (let index = 0; index < numString.length; index++){
    let value = numString[index];
    if (value == '6'){
      return parseInt(numString.slice(0, index) + '9' + numString.slice(index + 1));
    }
  }

  return num;
};