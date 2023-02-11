class Solution {
  public int numJewelsInStones(String jewels, String stones) {
    Set<Character> mySet = new HashSet<Character>();
    for (int index = 0; index < jewels.length(); index++){
      Character jewel = jewels.charAt(index);
      mySet.add(jewel);
    }

    int count = 0;
    for (int index = 0; index < stones.length(); index++){
      Character stone = stones.charAt(index);
      if (mySet.contains(stone)){
        count += 1;
      }
    }

    return count;
  }
}