/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var digitSum = function(s, k) {
  let result = "";
  while(s.length > k){
    let total = 0;
    for (let index = 0; index < s.length; index++){
      let value = s[index];
      if (index != 0 && index % k == 0){
        result += total.toString();
        total = 0;
      }
      total += parseInt(value);
    }
    result += total.toString();
    s = result;
    result = "";
  }

  return s;
};