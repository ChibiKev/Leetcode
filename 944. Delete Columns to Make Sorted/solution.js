/**
 * @param {string[]} strs
 * @return {number}
 */
 var minDeletionSize = function(strs) {
  let sizeOfRow = strs.length;
  let sizeOfColumn = strs[0].length;

  let count = 0;

  for (let column = 0; column < sizeOfColumn; column++){
    for (let row = 0; row < sizeOfRow - 1; row++){
      if (strs[row][column] > strs[row + 1][column]){
        count += 1;
        break;
      }
    }
  }

  return count;
};