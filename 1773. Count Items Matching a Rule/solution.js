/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
 var countMatches = function(items, ruleKey, ruleValue) {
  const ruleIndexes = {
    "type": 0,
    "color": 1,
    "name": 2
  };

  let ruleIndex = ruleIndexes[ruleKey];

  let count = 0;

  for (let item of items){
    if (item[ruleIndex] === ruleValue){
      count += 1;
    }
  }

  return count;
};