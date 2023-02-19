class Solution {
  public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
    List<Boolean> result = new ArrayList<Boolean>();
    int maxCandies = 0;
    for (int index = 0; index < candies.length; index++){
      int candy = candies[index];
      if (candy > maxCandies){
        maxCandies = candy;
      }
    }
    
    for (int index = 0; index < candies.length; index++){
      int candy = candies[index];
      int totalCandy = candy + extraCandies;
      if (totalCandy >= maxCandies){
        result.add(true);
      }
      else{
        result.add(false);
      }
    }
    
    return result;
  }
}