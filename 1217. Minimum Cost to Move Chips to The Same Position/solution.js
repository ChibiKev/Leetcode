/**
 * @param {number[]} position
 * @return {number}
 */
 var minCostToMoveChips = function(position) {
  let even = 0;
  let odd = 0;
  for (let chips of position){
    if (chips % 2 === 0){
      even += 1;
    }
    else{
      odd += 1;
    }
  }

  let result = even;
  if (even > odd){
    result = odd;
  }
  
  return result;
};