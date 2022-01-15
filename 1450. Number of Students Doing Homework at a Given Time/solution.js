/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
 var busyStudent = function(startTime, endTime, queryTime) {
  let totalLength = startTime.length;
  let count = 0;
  for (let i = 0; i < totalLength; i++){
    let start = startTime[i];
    let end = endTime[i];
    if (start <= queryTime && queryTime <= end){
      count += 1;
    }
  }
  
  return count;
};