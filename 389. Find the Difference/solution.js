  /**
   * @param {string} s
   * @param {string} t
   * @return {character}
   */
   var findTheDifference = function(s, t) {
    let sortedS = s.split('').sort().join('');
    let sortedT = t.split('').sort().join('');

    for (let index = 0; index < sortedS.length; index++){
      let sLetter = sortedS[index];
      let tLetter = sortedT[index];
      if (sLetter != tLetter){
        return tLetter;
      }
    }

    return sortedT[sortedT.length - 1];
  };