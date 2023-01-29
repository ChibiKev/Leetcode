/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0){
    return false;
  }
  
  let reverseX = 0;
  let xCopy = x;
  while (xCopy > 0){
    lastDigit = xCopy % 10;
    reverseX = reverseX * 10 + lastDigit;
    xCopy = Math.floor(xCopy / 10);
  }

  return x == reverseX;
};