/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
  let first = cost[0];
  let second = cost[1];
  if (cost.length <= 2){
    return Math.min(first, second);
  }

  for (let index = 2; index < cost.length; index++){
    let num = cost[index];
    let currrent = num + Math.min(first, second);
    first = second;
    second = currrent;
  }

  return Math.min(first, second);
};