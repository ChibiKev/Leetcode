class Solution {
  public boolean divideArray(int[] nums) {
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

    for (Map.Entry<Integer, Integer> num : dictionary.entrySet()){
      if (num.getValue() % 2 != 0){
        return false;
      }
    }

    return true;
  }
}