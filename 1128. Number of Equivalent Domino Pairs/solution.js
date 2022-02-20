/**
 * @param {number[][]} dominoes
 * @return {number}
 */
 var numEquivDominoPairs = function(dominoes) {
  let myDict = {};
  let result = 0;
  for (let domino of dominoes){
    let usedDomino = domino[0].toString() + domino[1].toString();
    let flippedDomino = domino[1].toString() + domino[0].toString();
    if (myDict[flippedDomino]){
      usedDomino = flippedDomino;
    }
    if (myDict[usedDomino]){
      result += myDict[usedDomino];
      myDict[usedDomino] += 1;
    }
    else{
      myDict[usedDomino] = 1;
    }
  }

  return result;
};