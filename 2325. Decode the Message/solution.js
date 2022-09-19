/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
 var decodeMessage = function(key, message) {
  let dictionary = {};
  let countLetter = 'a';
  for (let index = 0; index < key.length; index++){
    let letter = key[index];
    if (letter != ' ' && dictionary[letter] == undefined){
      dictionary[letter] = countLetter;
      countLetter = String.fromCharCode(countLetter.charCodeAt(0) + 1);
    }
  }
  
  let result = "";
  for (let index = 0; index < message.length; index++){
    let letter = message[index];
    if (letter != ' '){
      result += dictionary[letter];
    }
    else{
      result += ' ';
    }
  }

  return result;
};