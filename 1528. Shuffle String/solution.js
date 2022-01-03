/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
  let storage = [];
  for (let index in indices){
    storage[indices[index]] = s[index];
  }
  
  let result = storage.join('');
  
  return result;
};