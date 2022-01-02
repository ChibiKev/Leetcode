/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
 var shortestCompletingWord = function(licensePlate, words) {
  let formattedLicensePlate = licensePlate.toLowerCase().replace(/[^a-z]/g, '');
  let licensePlateDictionary = {};
  
  for (let char of formattedLicensePlate){
    licensePlateDictionary[char] = (licensePlateDictionary[char] || 0) + 1;
  }

  let maxValue = 0;
  let maxWord = "";
  for (let word of words){
    let count = 0;
    let dictionary = {...licensePlateDictionary};
    for (let letter of word){
      if (dictionary[letter] > 0){
        count += 1;
        dictionary[letter] -= 1;
      }
    }
    if (count > maxValue){
      maxValue = count;
      maxWord = word;
    }
    else if (count === maxValue && maxWord.length > word.length){
      maxValue = count;
      maxWord = word;
    }
  }
  
  return maxWord;
};