/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
 var distanceBetweenBusStops = function(distance, start, destination) {
  let travel = 0;
  let total = 0;

  let begin = start;
  let end = destination;

  if (begin > end){
    let temp = begin;
    begin = end;
    end = temp;
  }

  for (let index = 0; index < distance.length; index++){
    let number = distance[index];
    if (index >= begin && index < end){
      travel += number;
    }
    total += number;
  }

  return Math.min(travel, total - travel);
};