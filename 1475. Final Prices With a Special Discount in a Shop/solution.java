class Solution {
  public int[] finalPrices(int[] prices) {
    Stack<Integer> stack = new Stack<Integer>();
    for(int index = 0; index < prices.length; index++){
      int price = prices[index];
      while(stack.size() > 0) {
        int lastStackIndex = stack.peek();
        if (prices[lastStackIndex] < price){
          break;
        }
        prices[lastStackIndex] -= price;
        stack.pop();
      }
      stack.push(index);
    }

    return prices;
  }
}