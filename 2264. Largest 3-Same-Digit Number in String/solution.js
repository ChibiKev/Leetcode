/**
 * @param {string} num
 * @return {string}
 */
 var largestGoodInteger = function(num) {
  let result = "";
  for (let index = 2; index < num.length; index++){
    if (num[index - 2] == num[index - 1] && num[index - 1] == num[index]){
      if (result == ""){
        result = num.slice(index - 2, index + 1);
      }
      else if (parseInt(num.slice(index - 2, index + 1)) > parseInt(result)){
        result = num.slice(index - 2, index + 1);
      }
    }
  }
  
  return result;
};