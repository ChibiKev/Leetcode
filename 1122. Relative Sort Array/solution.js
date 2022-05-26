/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
 var relativeSortArray = function(arr1, arr2) {
  let dictionary = {};
  let others = [];
  let mySet = new Set(arr2);
  for (let num of arr1){
    if (!dictionary[num] && mySet.has(num)){
      dictionary[num] = 1
    }
    else if (dictionary[num] && mySet.has(num)){
      dictionary[num] += 1;
    }
    else{
      others.push(num);
    }
  }

  others.sort(function(a, b){return a-b});
  let result = [];
  for (let num of arr2){
    if (dictionary[num]){
      result = [...result, ...new Array(dictionary[num]).fill([num]).flat()];
    }
  }
  result = [...result, ...others];
  
  return result;
};