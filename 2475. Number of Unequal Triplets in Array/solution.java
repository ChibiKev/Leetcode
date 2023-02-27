class Solution {
  public int unequalTriplets(int[] nums) {
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

    int result = 0;
    int left = 0;
    int right = nums.length;
    for (Map.Entry<Integer, Integer> num : dictionary.entrySet()){
      right -= num.getValue();
      result += left * num.getValue() * right;
      left += num.getValue();
    }
    
    return result;
  }
}