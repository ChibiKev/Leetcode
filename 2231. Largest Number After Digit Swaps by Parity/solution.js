/**
 * @param {number} num
 * @return {number}
 */
 var largestInteger = function(num) {
  let stringNum = num.toString();
  let evenNum = [];
  let oddNum = [];
  for (let index = 0; index < stringNum.length; index++){
    let value = parseInt(stringNum[index]);
    if (value % 2 == 0){
      evenNum.push(stringNum[index]);
    }
    else{
      oddNum.push(stringNum[index]);
    }
  }
  evenNum.sort(function(a, b){return a-b});
  oddNum.sort(function(a, b){return a-b});

  let result = "";
  for (let index = 0; index < stringNum.length; index++){
    let value = parseInt(stringNum[index]);
    if (value % 2 == 0){
      result += evenNum.pop();
    }
    else{
      result += oddNum.pop();
    }
  }

  return parseInt(result);
};