class NumArray {
  List<Integer> dp = new ArrayList<Integer>();
  int numsSum = 0;

  public NumArray(int[] nums) {
     for (int index = 0; index < nums.length; index++){
      numsSum += nums[index];
      dp.add(numsSum);
    } 
  }

  public int sumRange(int left, int right) {
    int total = 0;
    if (left == 0){
      total = dp.get(right);
    }
    else{
      total = dp.get(right) - dp.get(left - 1);
    }
    return total;
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray obj = new NumArray(nums);
 * int param_1 = obj.sumRange(left,right);
 */