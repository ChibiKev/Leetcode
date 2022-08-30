/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
 var removeDigit = function(number, digit) {
  let result = "0";
  for (let index = 0; index < number.length; index++){
    let value = number[index];
    if (value == digit){
      let temp = number.slice(0, index) + number.slice(index + 1);
      if (temp > result){
        result = temp;
      }
    }
  }
  return result;
};