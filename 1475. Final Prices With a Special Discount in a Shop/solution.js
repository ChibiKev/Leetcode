/**
 * @param {number[]} prices
 * @return {number[]}
 */
 var finalPrices = function(prices) {
  let stack = [];
  for (let index = 0; index < prices.length; index++){
    let price = prices[index];
    while (stack.length > 0) {
      let lastStackIndex = stack[stack.length - 1];
      if (prices[lastStackIndex] < price){
        break;
      }
      prices[lastStackIndex] -= price;
      stack.pop();
    }
    stack.push(index);
  }

  return prices;
};