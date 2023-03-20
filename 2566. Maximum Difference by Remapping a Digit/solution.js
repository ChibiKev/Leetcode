/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function(num) {
  let nonZero = "";
  let nonNine = "";

  let stringNum = num.toString();
  for (let index = 0; index < stringNum.length; index++){
    let numValue = stringNum[index];
    if (numValue != "0"){
      nonZero = numValue;
      break;
    }
  }

  for (let index = 0; index < stringNum.length; index++){
    let numValue = stringNum[index];
    if (numValue != "9"){
      nonNine = numValue;
      break;
    }
  }

  let minNum = "";
  let maxNum = "";
  for (let index = 0; index < stringNum.length; index++){
    let numValue = stringNum[index];
    if (numValue == nonZero){
      minNum += "0";
    }
    else{
      minNum += numValue;
    }
    if (numValue == nonNine){
      maxNum += "9";
    }
    else{
      maxNum += numValue;
    }
  }
  
  return parseInt(maxNum) - parseInt(minNum);
}