/**
 * @param {number[]} amount
 * @return {number}
 */
 var fillCups = function(amount) {
  let total = 0;
  let highestValue = 0;
  for (let index = 0; index < amount.length; index++){
    let value = amount[index];
    total += value;
    if (value > highestValue){
      highestValue = value;
    }
  }

  let result = highestValue;
  if (Math.floor((total + 1) / 2) > result){
    result = Math.floor((total + 1) / 2);
  }

  return result;
};