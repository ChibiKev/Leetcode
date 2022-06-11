/**
 * @param {number[]} gain
 * @return {number}
 */
 var largestAltitude = function(gain) {
  let altitude = 0;
  let highest = 0;
  for (let index = 0; index < gain.length; index++){
    let value = gain[index];
    altitude += value;
    if (altitude > highest){
      highest = altitude;      
    }
  }

  return highest;
};