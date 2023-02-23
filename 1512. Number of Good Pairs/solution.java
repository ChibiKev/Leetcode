class Solution {
  public int numIdenticalPairs(int[] nums) {
    Map<Integer, Integer> dictionary = new HashMap<>();
    int count = 0;
    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      if (dictionary.containsKey(num)){
        count += dictionary.get(num);
        dictionary.put(num, dictionary.get(num) + 1);
      }
      else{
        dictionary.put(num, 1);
      }
    }
    return count;
  }
}