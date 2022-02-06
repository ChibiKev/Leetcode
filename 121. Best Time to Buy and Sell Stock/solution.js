/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let start = 0;
  let profit = 0;
  for (let index = 1; index < prices.length; index++){
    let currentProfit = prices[index] - prices[start];
    if (prices[start] < prices[index]){
      if (profit < currentProfit){
        profit = currentProfit;
      }
    }
    else{
      start = index;
    }
  }

  return profit;
};