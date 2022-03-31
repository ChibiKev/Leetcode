class Solution {
  public int distributeCandies(int[] candyType) {
    Set<Integer> candyTypeSet = new HashSet<>();
    for (int index = 0; index < candyType.length; index++){
      candyTypeSet.add(candyType[index]);
    }
    int maximumCandy = candyType.length / 2;
    return Math.min(maximumCandy, candyTypeSet.size());
  }
}