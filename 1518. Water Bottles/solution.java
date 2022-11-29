class Solution {
  public int numWaterBottles(int numBottles, int numExchange) {
    int result = numBottles + (numBottles / numExchange);
    int count = (numBottles / numExchange) + (numBottles % numExchange);
    
    while (count >= numExchange){
      result += (count / numExchange);
      count = (count / numExchange) + (count % numExchange);
    }

    return result;
  }
}