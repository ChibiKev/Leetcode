/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
 var findPoisonedDuration = function(timeSeries, duration) {
  let totalTime = 0;
  let nextTime = 0;
  for (let time of timeSeries){
    let subtractedTime = 0;
    if (time < nextTime){
      subtractedTime = nextTime - time;
    }
    nextTime = time + duration;
    totalTime += duration - subtractedTime;
  }

  return totalTime;
};