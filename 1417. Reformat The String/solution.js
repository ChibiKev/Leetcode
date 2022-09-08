/**
 * @param {string} s
 * @return {string}
 */
 var reformat = function(s) {
  let digits = "";
  let alphas = "";

  for (let index = 0; index < s.length; index++){
    let value = s[index];
    if (!isNaN(value)){
      digits += value;
    }
    else{
      alphas += value;
    }
  }

  let result = "";

  if (Math.abs(digits.length - alphas.length) > 1){
    return result;
  }
  else if (digits.length > alphas.length){
    for (let index = 0; index < digits.length; index++){
      result += digits[index];
      if (index < alphas.length){
        result += alphas[index];        
      }
    }
  }
  else{
    for (let index = 0; index < alphas.length; index++){
      result += alphas[index];
      if (index < digits.length){
        result += digits[index];
      }
    }
  }

  return result;
};