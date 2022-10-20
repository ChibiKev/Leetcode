/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
 var calculateTax = function(brackets, income) {
  let result = 0;
  let previous = 0;
  for (let index = 0; index < brackets.length; index++){
    let bracket = brackets[index];
    let upper = bracket[0];
    let percent = bracket[1];
    if (income >= upper){
      result += (upper - previous) * percent / 100;
      previous = upper;
    }
    else{
      result += (income - previous) * percent / 100;
      break;
    }
  }
  return result;
};