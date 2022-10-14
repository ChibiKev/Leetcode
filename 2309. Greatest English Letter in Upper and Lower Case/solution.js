/**
 * @param {string} s
 * @return {string}
 */
 var greatestLetter = function(s) {
  let mySet = new Set(s);

  let lowercaseLetter = 'z'.charCodeAt(0);
  let uppercaseLetter = 'Z'.charCodeAt(0);

  for (let index = 0; index < 26; index++){
    if (mySet.has(String.fromCharCode(uppercaseLetter - index)) && mySet.has(String.fromCharCode(lowercaseLetter - index))){
      return String.fromCharCode(uppercaseLetter - index)
    }
  }

  return '';
};