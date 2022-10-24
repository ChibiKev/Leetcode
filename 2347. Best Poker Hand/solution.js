/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
 var bestHand = function(ranks, suits) {
  let suitsSet = new Set(suits);
  if (suitsSet.size == 1){
    return "Flush";
  }
  
  let ranksDictionary = {};
  for (let rank of ranks){
    ranksDictionary[rank] = (ranksDictionary[rank] || 0) + 1;
  }
  
  let result = "";

  for (let rank in ranksDictionary){
    if (ranksDictionary[rank] > 2){
      result = "Three of a Kind";
    }
    else if (ranksDictionary[rank] > 1 && result == ""){
      result = "Pair";
    }
  }
  
  if (result == ""){
    result = "High Card";
  }

  return result;
};