/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
 var addToArrayForm = function(num, k) {
  let carry = 0;
  for (let index = num.length - 1; index > -1; index--){
    num[index] += k % 10 + carry;
    k = Math.floor(k / 10);
    carry = 0;
    if (num[index] > 9){
      num[index] %= 10;
      carry = 1;
    }
  }
  
  carry += k;

  while (carry >= 1){
    num = [carry % 10].concat(num);
    carry = Math.floor(carry / 10);
  }

  return num;
};