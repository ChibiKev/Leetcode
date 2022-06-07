/**
 * @param {number[][]} points
 * @return {number}
 */
 var minTimeToVisitAllPoints = function(points) {
  let distance = 0;
  for (let index = 1; index < points.length; index++){
    let last = points[index - 1];
    let current = points[index];
    let most = Math.abs(current[0] - last[0]);
    if (Math.abs(current[1] - last[1]) > most){
      most = Math.abs(current[1] - last[1]);
    }
    distance += most;
  }
  return distance;
};