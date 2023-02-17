class Solution {
  public int[] smallerNumbersThanCurrent(int[] nums) {
    Map<Integer, Integer> dictionary = new HashMap<>();
    int[] sortedNums = nums.clone();
    Arrays.sort(sortedNums);
    for (int index = sortedNums.length - 1; index > -1; index--){
      int num = sortedNums[index];
      dictionary.put(num, index);
    }
    
    int[] result = nums;
    for (int index = 0; index < result.length; index++){
      int num = result[index];
      result[index] = dictionary.get(num);
    }

    return result;
  }
}