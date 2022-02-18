class Solution {
  public int[] intersection(int[] nums1, int[] nums2) {
    Set<Integer> nums1Set = new HashSet<>();
    Set<Integer> intersection = new HashSet<>();

    for (int index = 0; index < nums1.length; index++){
      nums1Set.add(nums1[index]);
    }
    
    for (int index = 0; index < nums2.length; index++){
      if (nums1Set.contains(nums2[index])){
        intersection.add(nums2[index]);
      }
    }
    
    int[] result = new int[intersection.size()];
    int index = 0;
    
    for (Integer num : intersection) {
      result[index] = num;
      index += 1;
    }
    
    return result;
  }
}