/**
 * @param {string} s
 * @return {number}
 */
 var countAsterisks = function(s) {
  let count = 0;
  let otherCount = 0;
  for (let index = 0; index < s.length; index++){
    let value = s[index];
    if (value == '|'){
      otherCount += 1;
    }
    else if (value == '*' && otherCount % 2 == 0){
      count += 1;
    }
  }
  
  return count;
};