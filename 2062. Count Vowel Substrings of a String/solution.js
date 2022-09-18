/**
 * @param {string} word
 * @return {number}
 */
 var countVowelSubstrings = function(word) {
  let j = 0;
  let k = 0;
  let vowel = 0;
  let count = 0;
  let vowels = {
    'a': 0,
    'e': 0,
    'i': 0,
    'o': 0,
    'u': 0
  };

  for (let index = 0; index < word.length; index++){
    let letter = word[index];
    if (vowels[letter] != undefined){
      vowels[letter] += 1;
      if (vowels[letter] == 1){
        vowel += 1;
      }
      while (vowel == 5){
        vowels[word[k]] -= 1;
        if (vowels[word[k]] == 0){
          vowel -= 1;
        }
        k += 1;
      }
      count += (k - j);
    }
    else{
      vowels['a'] = 0;
      vowels['e'] = 0;
      vowels['i'] = 0;
      vowels['o'] = 0;
      vowels['u'] = 0;
      vowel = 0;
      j = index + 1;
      k = index + 1;
    }
  }
  return count;
};