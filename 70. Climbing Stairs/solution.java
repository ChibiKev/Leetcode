class Solution {
  public int climbStairs(int n) {
    List<Integer> result = new ArrayList<Integer>(Arrays.asList(1, 1, 2));
    
    for (int index = 3; index < n + 1; index++){
      int nextIteration = result.get(index - 1) + result.get(index - 2);
      result.add(nextIteration);
    }
    
    return result.get(n);
  }
}