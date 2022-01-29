/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
 var decode = function(encoded, first) {
  let change = first;
  let result = [first];
  for (let number of encoded){
    change = number ^ change;
    result.push(change);
  }

  return result;
};