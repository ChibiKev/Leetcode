/**
 * @param {string} s
 * @return {boolean}
 */
 var areNumbersAscending = function(s) {
  let words = s.split(" ");
  let lastNumber = -1;
  for (let index = 0; index < words.length; index++){
    let word = words[index];
    if (!isNaN(word)){
      if (+word > lastNumber){
        lastNumber = +word;
      }
      else{
        return false;
      }
    }
  }
  
  return true;
};