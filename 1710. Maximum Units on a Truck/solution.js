/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
  let sortedBoxTypes = boxTypes.sort(function(a, b){return b[1]-a[1]});
  let count = 0;
  let result = 0;
  for (let box of sortedBoxTypes){
    if (count + box[0] < truckSize){
      result += box[0] * box[1];
      count += box[0];
    }
    else{
      result += (truckSize - count) * box[1];
      break;
    }
  }
  return result;
};