/**
 * @param {string} s
 * @return {string[]}
 */
 var cellsInRange = function(s) {
  let result = [];

  for (let column = s[0].charCodeAt(0); column < s[3].charCodeAt(0) + 1; column++){
    for (let row = s[1].charCodeAt(0); row < s[4].charCodeAt(0) + 1; row++){
      result.push(String.fromCharCode(column) + String.fromCharCode(row));
    }
  }

  return result;
};