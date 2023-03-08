class Solution {
  public int[] separateDigits(int[] nums) {
    List<Integer> resultArray = new ArrayList<Integer>();
    int[] reversedNums = new int[nums.length];
    for (int index = nums.length - 1; index > -1; index--){
      reversedNums[nums.length - 1 - index] = nums[index];
    }

    for (int index = 0; index < reversedNums.length; index++){
      int num = reversedNums[index];
      while (num != 0){
        int digit = num % 10;
        num /= 10;
        resultArray.add(digit);
      }
    }
    
    int[] result = new int[resultArray.size()];
    for (int index = resultArray.size() - 1; index > -1; index--){
      result[resultArray.size() - 1 - index] = resultArray.get(index);
    }
    return result;
  }
}