/**
 * @param {number[]} deck
 * @return {boolean}
 */
 var hasGroupsSizeX = function(deck) {
  let cardsAmount = {};
  for (let card of deck){
    cardsAmount[card] = (cardsAmount[card] || 0) + 1;
  }

  let minimum = Infinity;
  for (let card in cardsAmount){
    if (cardsAmount[card] < 2){
      return false;
    }
    if (cardsAmount[card] < minimum){
      minimum = cardsAmount[card];
    }
  }

  for (let amount = 2; amount < minimum + 1; amount++){
    let group = true;
    for (let card in cardsAmount){
      if (cardsAmount[card] % amount !== 0){
        group = false;
        break;
      }
    }
    if (group === true){
      return true;
    }
  }

  return false;
};