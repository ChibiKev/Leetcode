/**
 * @param {string} s
 * @return {number}
 */
 var minimumMoves = function(s) {
  let index = 0;
  let count = 0;

  while (index < s.length){
    if (s[index] == "X"){
      count += 1;
      index += 3;
    }
    else{
      index += 1;      
    }
  }

  return count;
};