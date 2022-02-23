/**
 * @param {number[]} bits
 * @return {boolean}
 */
 var isOneBitCharacter = function(bits) {
  let index = 0;
  let bitsSize = bits.length - 1;
  while (index < bitsSize){
    if (bits[index] === 1){
      index += 2;
    }
    else{
      index += 1;
    }
  }

  return index === bitsSize;
};