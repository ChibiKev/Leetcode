/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
  let result = 0;
  let nString = n.toString();
  for (let index = 0; index < nString.length; index++){
    let digit = nString[index];
    if (index % 2 == 0){
      result += parseInt(digit);
    }
    else{
      result -= parseInt(digit);
    }
  }
  return result;
};