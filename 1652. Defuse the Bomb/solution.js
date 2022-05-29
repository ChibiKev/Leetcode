/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
 var decrypt = function(code, k) {
  if (k === 0){
    return new Array(code.length).fill(0);
  }
  let start = 1;
  let end = k + 1;
  if (k < 0){
    start = code.length + k;
    end = code.length;
  }

  let total = 0;
  for (let index = start; index < end; index++){
    total += code[index];
  }

  let result = [];
  for (let index = 0; index < code.length; index++){
    result.push(total);
    start = start % code.length;
    end = end % code.length;
    total += code[end];
    total -= code[start];
    start += 1;
    end += 1;
  }

  return result;
};