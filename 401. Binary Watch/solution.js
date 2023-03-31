/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
  let result = [];
  for (let hour = 0; hour < 12; hour++){
    for (let minute = 0; minute < 60; minute++){
      let hourOnes = hour ? hour.toString(2).match(/1/g).length : 0;
      let minuteOnes = minute ? minute.toString(2).match(/1/g).length : 0;
      if (hourOnes + minuteOnes == turnedOn){
        result.push(`${hour}:${minute < 10 ? `0${minute}` : minute}`);
      }
    }
  }
  return result;
};