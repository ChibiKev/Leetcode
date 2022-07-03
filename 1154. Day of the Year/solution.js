/**
 * @param {string} date
 * @return {number}
 */
 var dayOfYear = function(date) {
  let calendar = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let year = parseInt(date.slice(0,4));
  let month = parseInt(date.slice(5,7));
  let day = parseInt(date.slice(8,10));

  let result = 0;

  if (year % 4 == 0 && year != 1900 && month > 2){
    result += 1;    
  }

  for (let amount = 0; amount < month - 1; amount++){
    result += calendar[amount];    
  }

  result += day;

  return result;
};