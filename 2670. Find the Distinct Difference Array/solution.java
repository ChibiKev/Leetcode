class Solution {
  public int[] distinctDifferenceArray(int[] nums) {
    Set<Integer> prefix = new HashSet<>();
    HashMap<Integer, Integer> suffix = new HashMap<>();;
    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      if (suffix.containsKey(num)){
        suffix.put(num, suffix.get(num) + 1);
      }
      else{
        suffix.put(num, 1);
      }
    }
    
    int[] result = new int[nums.length];

    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      prefix.add(num);
      
      suffix.put(num, suffix.get(num) - 1);
      if (suffix.get(num) == 0){
        suffix.remove(num);
      }
      
      result[index] = prefix.size() - suffix.size();
    }

    return result;
  }
}