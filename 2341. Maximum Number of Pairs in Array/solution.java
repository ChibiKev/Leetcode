class Solution {
  public int[] numberOfPairs(int[] nums) {
    int[] result = {0, 0};
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
      result[0] += num.getValue() / 2;
      if (num.getValue() % 2 == 1){
        result[1] += 1;
      }
    }

    return result;
  }
}