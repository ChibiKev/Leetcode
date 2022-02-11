/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
 var checkStraightLine = function(coordinates) {
  let x0 = coordinates[0][0];
  let y0 = coordinates[0][1];
  let x1 = coordinates[1][0];
  let y1 = coordinates[1][1];
  let dy = y1 - y0;
  let dx = x1 - x0;
  for (let index = 2; index < coordinates.length; index++){
    let x = coordinates[index][0];
    let y = coordinates[index][1];
    if (dx * (y - y1) !== dy * (x - x1)){
      return false;
    }
  }

  return true;
};