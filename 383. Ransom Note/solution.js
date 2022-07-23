/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
  let dictionary = {};
  for (let letter of magazine){
    dictionary[letter] = (dictionary[letter] || 0) + 1;
  }

  for (let index = 0; index < ransomNote.length; index++){
    let letter = ransomNote[index];
    if (dictionary[letter] > 0){
      dictionary[letter] -= 1;
    }
    else{
      return false;
    }
  }

  return true;
};