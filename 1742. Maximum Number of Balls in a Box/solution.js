/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
 var countBalls = function(lowLimit, highLimit) {
  let dictionary = {};

  for (let num = lowLimit; num < highLimit + 1; num++){
    let total = 0;
    for (value of num.toString()){
      total += parseInt(value);
    }
    dictionary[total] = (dictionary[total] || 0) + 1;
  }

  let highestCount = 0;
  for (let key in dictionary){
    if (dictionary[key] > highestCount){
      highestCount = dictionary[key];
    }
  }

  return highestCount;
};