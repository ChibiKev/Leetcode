class Solution {
  public int countHillValley(int[] nums) {
    List<Integer> newNums = new ArrayList<Integer>(Arrays.asList(nums[0]));
    for (int index = 1; index < nums.length; index++){
      int num = nums[index];
      if (newNums.get(newNums.size() - 1) != num){
        newNums.add(num);
      }
    }

    int count = 0;
    for (int index = 1; index < newNums.size() - 1; index++){
      int before = newNums.get(index - 1);
      int current = newNums.get(index);
      int after = newNums.get(index + 1);
      if (before < current && current > after){
        count += 1;
      }
      else if (before > current && current < after){
        count += 1;
      }
    }
    return count;
  }
}