/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
  let current = [1]
  for (let iteration = 0; iteration < rowIndex; iteration++){
    let storage = [1];
    for (let index = 0; index < current.length - 1; index++){
      storage.push(current[index] + current[index + 1]);
    }
    storage.push(1);
    current = storage;
  }
  return current;
};