/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  let index = 1;
  while (num > index){
    index = (index << 1) | 1;
  }
  return num ^ index;
};