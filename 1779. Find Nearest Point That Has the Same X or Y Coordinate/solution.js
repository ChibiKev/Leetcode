/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
 var nearestValidPoint = function(x, y, points) {
  let minDistance = Infinity;
  let result = -1;
  for (let index = 0; index < points.length; index++){
    let point = points[index];
    let currentx = point[0];
    let currenty = point[1];
    if (currentx === x || currenty === y){
      let distance = Math.abs(currentx - x) + Math.abs(currenty - y);
      if (distance < minDistance){
        minDistance = distance;
        result = index;
      }
    }
  }
  return result;
};