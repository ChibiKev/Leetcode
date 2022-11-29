/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
 var numWaterBottles = function(numBottles, numExchange) {
  let result = numBottles + Math.floor(numBottles / numExchange);
  let count = Math.floor(numBottles / numExchange) + (numBottles % numExchange);
  
  while (count >= numExchange){
    result += Math.floor(count / numExchange);
    count = Math.floor(count / numExchange) + (count % numExchange);
  }

  return result;
};