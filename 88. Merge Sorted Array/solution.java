class Solution {
  public void merge(int[] nums1, int m, int[] nums2, int n) {
    int nums1Index = m - 1;
    int nums2Index = n - 1;
    int insertIndex = m + n - 1;

    while (insertIndex >= 0 && nums2Index >= 0){
      if (nums1Index >= 0 && nums1[nums1Index] > nums2[nums2Index]){
        nums1[insertIndex] = nums1[nums1Index];
        nums1Index -= 1;
      }
      else{
        nums1[insertIndex] = nums2[nums2Index];
        nums2Index -= 1;
      }
      insertIndex -= 1;
    }
  }
}