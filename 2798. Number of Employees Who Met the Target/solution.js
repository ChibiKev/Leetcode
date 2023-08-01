/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
  let count = 0;
  for (let index = 0; index < hours.length; index++){
    let hour = hours[index];
    if (hour >= target){
      count += 1;
    }
  }
  return count;
};