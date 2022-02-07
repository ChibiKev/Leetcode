/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
  let result = [[1]]
  for (let number = 1; number < numRows; number++){
    let last = result[result.length - 1];
    let storage = [1];
    for (let lastStart = 0; lastStart < last.length - 1; lastStart++){
      storage.push(last[lastStart] + last[lastStart + 1]);
    }
    storage.push(1);
    result.push(storage);
  }
  return result;
};