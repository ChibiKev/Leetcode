/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
 var construct2DArray = function(original, m, n) {
  if (m * n !== original.length){
    return [];
  }

  let result = [];

  for (let row = 0; row < m; row++){
    let start = row * n;
    let end = (row * n) + n;
    result.push(original.slice(start, end));
  }

  return result;
};