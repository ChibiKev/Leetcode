/**
 * @param {string} sentence
 * @return {string}
 */
 var toGoatLatin = function(sentence) {
  let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let listOfWords = sentence.split(" ");

  for (let index = 0; index < listOfWords.length; index++){
    let words = listOfWords[index];
    if (!vowels.has(words[0])){
      listOfWords[index] = words.slice(1) + words.slice(0,1);
    }
    listOfWords[index] += "ma" + ("a".repeat(index + 1));
  }

  return listOfWords.join(" ");
};