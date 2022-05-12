/**
 * @param {number[]} cost
 * @return {number}
 */
 var minimumCost = function(cost) {
  cost.sort(function(a, b){return b-a});
  let count = 0;
  let total = 0;
  for (let num of cost){
    if (count === 2){
      count = 0;
      continue;
    }
    count += 1;
    total += num;
  }
  return total;
};