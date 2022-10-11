/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
 var minimumRecolors = function(blocks, k) {
  let white = 0;
  let result = Infinity;
  for (let index = 0; index < blocks.length; index++){
    let value = blocks[index];
    if (index >= k){
      if (white < result){
        result = white;
      }
    }
    if (value == 'W'){
      white += 1;
    }
    if (index >= k && blocks[index - k] == 'W'){
      white -= 1;
    }
  }

  if (white < result){
    result = white;
  }

  return result;
};