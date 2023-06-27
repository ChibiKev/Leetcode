/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
  let result = [];
  let save = [];
  for (let index = 0; index < arr.length; index++){
    save.push(arr[index]);
    if (save.length % size == 0){
      result.push(save);
      save = [];
    }
  }
  if (save.length != 0){
    result.push(save);
  }
  return result;
};