/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
 var timeRequiredToBuy = function(tickets, k) {
  let total = 0;
  let amount = tickets[k];

  for (let index = 0; index < tickets.length; index++){
    let ticket = tickets[index];
    if (index <= k){
      if (amount < ticket){
        total += amount;
      }
      else{
        total += ticket;
      }
    }
    else if (index > k){
      if (amount - 1 < ticket){
        total += amount - 1;
      }
      else{
        total += ticket;
      }
    }
  }

  return total;
};