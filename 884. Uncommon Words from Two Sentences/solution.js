/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
 var uncommonFromSentences = function(s1, s2) {
  let banned = new Set();
  let uncommon = new Set();

  let s1Words = s1.split(" ");
  for (let index = 0; index < s1Words.length; index++){
    let word = s1Words[index];
    if (uncommon.has(word)){
      banned.add(word);
      uncommon.delete(word);
    }
    else if (!banned.has(word) && !uncommon.has(word)){
      uncommon.add(word);      
    }
  }
  
  let s2Words = s2.split(" ");
  for (let index = 0; index < s2Words.length; index++){
    let word = s2Words[index];
    if (uncommon.has(word)){
      banned.add(word);
      uncommon.delete(word);
    }
    else if (!banned.has(word) && !uncommon.has(word)){
      uncommon.add(word);      
    }
  }
  
  return [...uncommon];
};