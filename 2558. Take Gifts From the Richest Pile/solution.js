/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
  let count = 0;
  while (count < k){
    gifts.sort(function(a, b){return a-b});
    let squaredGift = Math.floor(Math.sqrt(gifts[gifts.length - 1]));
    gifts[gifts.length - 1] = squaredGift;
    count += 1;
  }
  
  let total = 0;
  for (let index = 0; index < gifts.length; index++){
    let gift = gifts[index];
    total += gift;
  }
  return total;
};