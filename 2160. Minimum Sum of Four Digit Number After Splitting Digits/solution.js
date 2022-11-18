/**
 * @param {number} num
 * @return {number}
 */
 var minimumSum = function(num) {
  let stringNum = num.toString();
  let sortedNum = stringNum.split('').sort().join('');
  return parseInt(sortedNum[0] + sortedNum[2]) + parseInt(sortedNum[1] + sortedNum[3]);
};