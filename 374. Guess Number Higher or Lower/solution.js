/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  let low = 0;
  let high = n;
  while (low <= high){
    let mid = low + Math.floor((high - low) / 2);
    let guessResult = guess(mid);
    if (guessResult == 0){
      return mid;
    }
    else if (guessResult == 1){
      low = mid + 1;
    }
    else if (guessResult == -1){
      high = mid - 1;
    }
  }
  return -1;
};