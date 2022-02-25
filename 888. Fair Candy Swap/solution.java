class Solution {
  public int[] fairCandySwap(int[] aliceSizes, int[] bobSizes) {
    Set<Integer> aliceSet = new HashSet<>();
    int aliceTotal = 0;
    int bobTotal = 0;
    for (int index = 0; index < aliceSizes.length; index++){
      int alice = aliceSizes[index];
      aliceTotal += alice;
      aliceSet.add(alice);
    }
    for (int index = 0; index < bobSizes.length; index++){
      int bob = bobSizes[index];
      bobTotal += bob;
    }

    int difference = (aliceTotal - bobTotal) / 2;
    for (int index = 0; index < bobSizes.length; index++){
      int bob = bobSizes[index];
      int search = bob + difference;
      if (aliceSet.contains(search)){
        return new int[] {search, bob};
      }
    }
    return new int[] {};
  }
}