/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var checkIfExist = function(arr) {
  let arrSet = new Set(arr);
  let zero = 0;
  for (let num of arr){
    if (num === 0 && zero === 0){
      zero = 1;
      continue;
    }  
    if (arrSet.has(num * 2)){
      return true;
    }
  }

  return false;
};