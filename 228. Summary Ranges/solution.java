class Solution {
  public List<String> summaryRanges(int[] nums) {
    List<String> result = new ArrayList<String>();
    if (nums.length == 0){
      return result;
    }

    int lastNum = nums[0];
    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      int nextNum = num;
      if (index != nums.length - 1){
        nextNum = nums[index + 1];
        if (num + 1 == nextNum){
          continue;
        }
      }

      if (lastNum == num){
        result.add(Integer.toString(num));
      }
      else{
        result.add(Integer.toString(lastNum) + "->" + Integer.toString(num));
      }
      lastNum = nextNum;
    }

    return result;
  }
}