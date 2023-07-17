class Solution {
  public int buyChoco(int[] prices, int money) {
    int[] sortedPrices = prices.clone();
    Arrays.sort(sortedPrices);
    if (money - (sortedPrices[0] + sortedPrices[1]) >= 0){
      return money - (sortedPrices[0] + sortedPrices[1]);
    }
    return money;
  }
}