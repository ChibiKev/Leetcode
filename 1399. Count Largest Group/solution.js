/**
 * @param {number} n
 * @return {number}
 */
 var countLargestGroup = function(n) {
  let dictionary = {};

  for (let index = 1; index < n + 1; index++){
    let total = 0;
    for (value of index.toString()){
      total += parseInt(value);
    }
    dictionary[total] = (dictionary[total] || 0) + 1;
  }

  let totalCount = 0;
  let highestCount = 0;
  for (let key in dictionary){
    if (dictionary[key] > highestCount){
      highestCount = dictionary[key];
      totalCount = 1;
    }
    else if (dictionary[key] == highestCount){
      totalCount += 1;
    }
  }

  return totalCount;
};