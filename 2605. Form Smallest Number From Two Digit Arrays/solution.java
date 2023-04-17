class Solution {
  public int minNumber(int[] nums1, int[] nums2) {
    int[] storage = new int[9];
    Arrays.fill(storage, 0);
    int num1Min = 10;
    int num2Min = 10;
    for (int index = 0; index < nums1.length; index++){
      int num = nums1[index];
      storage[num - 1] += 1;
      if (num < num1Min){
        num1Min = num;
      }
    }
    for (int index = 0; index < nums2.length; index++){
      int num = nums2[index];
      storage[num - 1] += 1;
      if (num < num2Min){
        num2Min = num;
      }
    }
    
    for (int index = 0; index < storage.length; index++){
      int num = storage[index];
      if (num >= 2){
        return index + 1;
      }
    }
    
    if (num1Min > num2Min){
      return (num2Min * 10) + num1Min;
    }
    
    return (num1Min * 10) + num2Min;
  }
}