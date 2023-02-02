class Solution {
  public int searchInsert(int[] nums, int target) {
    int low = 0;
    int high = nums.length - 1;
    int mid = low + ((high - low) / 2);
    while (low <= high){
      mid = low + ((high - low) / 2);
      int value = nums[mid];
      if (value == target){
        return mid;
      }
      else if (value < target){
        low = mid + 1;
      }
      else if (value > target){
        high = mid - 1;
      }
    }
    if (nums[mid] < target){
      return mid + 1;
    }
    return mid;
  }
}