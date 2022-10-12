/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
 var percentageLetter = function(s, letter) {
  let amount = 0.00;
  for (let index = 0; index < s.length; index++){
    let value = s[index];
    if (value == letter){
      amount += 1;
    }
  }
  return Math.floor(amount / s.length * 100);
};