class Solution {
  public boolean isGood(int[] nums) {
    Map<Integer, Integer> dictionary = new HashMap<>();
    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      if (dictionary.containsKey(num)){
        dictionary.put(num, dictionary.get(num) + 1);
      }
      else{
        dictionary.put(num, 1);
      }
    }
      
    int n = nums.length - 1;
    if (!dictionary.containsKey(n) || dictionary.get(n) != 2){
      return false;
    }
    
    for (Map.Entry<Integer, Integer> num : dictionary.entrySet()){
      if (num.getKey() == n){
        continue;
      }
      if (num.getValue() > 1 || num.getKey() > n){
        return false;
      }
    }
    return true;
  }
}