/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function(num) {
  let stringNum = num.toString();
  let sortedNum = stringNum.split('').sort().join('');
  
  let num1 = "";
  let num2 = "";
  for (let index = 0; index < sortedNum.length; index++){
    let numValue = sortedNum[index];
    if (index % 2 == 0){
      num1 += numValue;
    }
    else{
      num2 += numValue;
    }
  }
      
  return parseInt(num1) + parseInt(num2);
};