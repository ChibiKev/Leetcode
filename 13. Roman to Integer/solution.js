/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let index = 0;
  let result = 0;
  let dictionary = {
    "I": 1,
    "IV": 4,
    "V": 5,
    "IX": 9,
    "X": 10,
    "XL": 40,
    "L": 50,
    "XC": 90,
    "C": 100,
    "CD": 400,
    "D": 500,
    "CM": 900,
    "M": 1000
  };
  while (index < s.length){
    if (index + 1 < s.length && (dictionary[s[index] + s[index + 1]])){
      result += dictionary[s[index] + s[index + 1]];
      index += 2;
    }
    else{
      result += dictionary[s[index]];
      index += 1;
    }
  }
  return result;
};