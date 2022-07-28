/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
  let dictionary = {};
  for (let letter of s){
    dictionary[letter] = (dictionary[letter] || 0) + 1;
  }

  let odd = false;
  let count = 0;

  for (let key in dictionary){
    if (dictionary[key] > 2 || dictionary[key] % 2 == 0){
      count += dictionary[key];
      if (dictionary[key] % 2 != 0){
        count -= 1;
      }
    }
    if (dictionary[key] % 2 != 0){
      odd = true;
    }
  }

  if (odd){
    count += 1;
  }

  return count;
};