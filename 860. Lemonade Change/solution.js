/**
 * @param {number[]} bills
 * @return {boolean}
 */
 var lemonadeChange = function(bills) {
  let fives = 0;
  let tens = 0;

  for (let bill of bills){
    if (bill === 5){
      fives += 1;
    }
    else if (bill === 10){
      fives -= 1;
      tens += 1;
    }
    else if (bill === 20 && tens > 0){
      fives -= 1;
      tens -= 1;
    }
    else{
      fives -= 3;
    }
    if (fives < 0 || tens < 0){
      return false;
    }
  }

  return true;
};