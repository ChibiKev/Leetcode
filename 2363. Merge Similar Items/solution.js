/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
 var mergeSimilarItems = function(items1, items2) {
  let dictionary = {};
  for (let index = 0; index < items1.length; index++){
    let item = items1[index];
    dictionary[item[0]] = (dictionary[item[0]] || 0) + item[1];
  }

  for (let index = 0; index < items2.length; index++){
    let item = items2[index];
    dictionary[item[0]] = (dictionary[item[0]] || 0) + item[1];
  }

  let ret = [];
  let keys = Object.keys(dictionary);
  keys.sort(function(a, b){return a-b});

  for (let index = 0; index < keys.length; index++){
    ret.push([keys[index], dictionary[keys[index]]]);
  }
  
  return ret;
};