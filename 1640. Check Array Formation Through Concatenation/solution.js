/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
 var canFormArray = function(arr, pieces) {
  let index = 0;
  let nextIndex = 1;
  let result = false;
  while (index < arr.length && nextIndex < arr.length + 1){
    let value = arr.slice(index, nextIndex);
    let found = false;
    for (let piece of pieces){
      if (JSON.stringify(piece) === JSON.stringify(value)){
        found = true;
        result = true;
        index = nextIndex;
        nextIndex = index + 1;
        break;
      }
    }
    if (!found){
      result = false;
      nextIndex += 1;
    }
  }

  return result;
};