/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
  let index = 1;
  while (n > index){
    index = (index << 1) | 1;
  }
  return n ^ index;
};