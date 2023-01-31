/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  strs.sort();

  let lowestCount = strs[0].length;
  for (let index = 0; index < strs.length; index++){
    let strings = strs[index];
    if (strings.length < lowestCount){
      lowestCount = strings.length;
    }
  }
  
  let firstStr = strs[0];
  let lastStr = strs[strs.length - 1];
  let prefix = "";
  for (let index = 0; index < lowestCount; index++){
    if (firstStr[index] == lastStr[index]){
      prefix += firstStr[index];
    }
    else{
      break;
    }
  }
  return prefix;
};