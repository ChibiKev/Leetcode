/**
 * @param {string} s
 * @return {number}
 */
 var secondHighest = function(s) {
  let firstMax = -1;
  let secondMax = -1;

  for (let index = 0; index < s.length; index++){
    let value = s[index];
    if (!isNaN(value)){
      if (firstMax < value){
        secondMax = firstMax;
        firstMax = value;
      }
      else if (firstMax > value && secondMax < value){
        secondMax = value;
      }
    }
  }

  return secondMax;
};