class Solution {
public:
  int getCommon(vector<int>& nums1, vector<int>& nums2) {
    int nums1Index = 0;
    int nums2Index = 0;
    int result = -1;
    while (nums1Index < nums1.size() && nums2Index < nums2.size()){
      int nums1Value = nums1[nums1Index];
      int nums2Value = nums2[nums2Index];
      if (nums1Value == nums2Value){
        result = nums1Value;
        break;
      }
      else if (nums1Value > nums2Value){
        nums2Index += 1;
      }
      else if (nums1Value < nums2Value){
        nums1Index += 1;
      }
    }
    return result;
  }
};