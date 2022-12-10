/**
 * @param {number} num
 * @return {number}
 */
 var countEven = function(num) {
  let total = (num % 10) + (Math.floor(num / 10) % 10) + (Math.floor(num / 100) % 10) + (Math.floor(num / 1000) % 10);

  return Math.floor((num - (total & 1)) / 2);
};