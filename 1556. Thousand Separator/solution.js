/**
 * @param {number} n
 * @return {string}
 */
 var thousandSeparator = function(n) {
  if (n < 1000){
    return n.toString();
  }

  let result = "";
  let count = 0;
  while (n > 0){
    if (count == 3){
      result = '.' + result;
      count = 0;
    }
    else{
      result = (n % 10).toString() + result;
      n = Math.floor(n / 10);
      count += 1;
    }
  }

  return result;
};