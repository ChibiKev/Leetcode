/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
 var maxRepeating = function(sequence, word) {
  let count = 0;
  let maxCount = 0;
  let index = 0;
  
  while (index < sequence.length){
    if (sequence.slice(index, index + word.length) == word){
      count += 1;
      index += word.length;
      if (count > maxCount){
        maxCount = count;
      }
    }
    else{
      index += 1;
      count = 0;
    }
  }

  index = sequence.length;
  count = 0;

  while (index > -1){
    if (sequence.slice(index - word.length, index) == word){
      count += 1;
      index -= word.length;
      if (count > maxCount){
        maxCount = count;
      }
    }
    else{
      index -= 1;
      count = 0;
    }
  }

  return maxCount;
};