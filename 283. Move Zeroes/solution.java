class Solution {
  public void moveZeroes(int[] nums) {
    Queue<Integer> zeros = new PriorityQueue();

    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      if (num == 0){
        zeros.add(index);
        continue;
      }
      if (zeros.size() == 0){
        continue;
      }
      nums[zeros.remove()] = num;
      zeros.add(index);
    }

    for(Integer zero : zeros){
      nums[zero] = 0;
    }
  }
}