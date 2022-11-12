/**
 * @param {string[]} words
 * @return {string}
 */
 var oddString = function(words) {
  let dictionary = {};
  for (let index = 0; index < words.length; index++){
    let word = words[index];
    let calc = [];
    for (let index2 = 1; index2 < word.length; index2++){
      let difference = word[index2].charCodeAt(0) - word[index2 - 1].charCodeAt(0);
      calc.push(difference);
    }

    if (dictionary[calc]){
      dictionary[calc].push(word);
    }
    else {
      dictionary[calc] = [word];
    }
  }

  for (let difference in dictionary){
    if ((dictionary[difference]).length == 1){
      return dictionary[difference][0];
    }
  }
};