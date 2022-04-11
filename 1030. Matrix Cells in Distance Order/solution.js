/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
 var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
  let result = [];
  for (let row = 0; row < rows; row++){
    for (let column = 0; column < cols; column++){
      result.push([row, column]);
    }
  }
  result.sort(function(a, b){
    let aRow = a[0]
    let aColumn = a[1]
    let bRow = b[0]
    let bColumn = b[1]
    return (Math.abs(aRow - rCenter) + Math.abs(aColumn - cCenter)) - (Math.abs(bRow - rCenter) + Math.abs(bColumn - cCenter))
  });
  
  return result
};