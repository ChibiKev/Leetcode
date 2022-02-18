class Solution {
public:
  vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
    unordered_set<int> nums1Set =unordered_set<int>(nums1.begin(),nums1.end());
    unordered_set<int> nums2Set =unordered_set<int>(nums2.begin(),nums2.end());
    
    vector<int> result;
    
    for (auto num = nums1Set.begin(); num != nums1Set.end(); num++){
      if (nums2Set.count(*num)){
        result.push_back(*num);
      }
    }
    return result;
  }
};