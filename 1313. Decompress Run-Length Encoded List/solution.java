class Solution {
  public int[] decompressRLElist(int[] nums) {
    List<Integer> result = new ArrayList<Integer>();
    for (int index = 0; index < nums.length - 1; index += 2){
      int frequency = nums[index];
      int value = nums[index + 1];
      for (int amount = 0; amount < frequency; amount++){
        result.add(value);
      }
    }
    
    int[] resultingArray = new int[result.size()];
    for (int index = 0; index < result.size(); index++){
      resultingArray[index] = result.get(index);
    }

    return resultingArray;
  }
}