class Solution {
public:
  vector<vector<int>> findDifference(vector<int>& nums1, vector<int>& nums2) {
    unordered_set<int> nums1Set = unordered_set<int>(nums1.begin(),nums1.end());
    unordered_set<int> nums2Set = unordered_set<int>(nums2.begin(),nums2.end());

    vector<vector<int>> result {{},{}};

    for (auto num = nums1Set.begin(); num != nums1Set.end(); num++){
      if (nums2Set.count(*num) == 0){
        result[0].push_back(*num);
      }
    }

    for (auto num = nums2Set.begin(); num != nums2Set.end(); num++){
      if (nums1Set.count(*num) == 0){
        result[1].push_back(*num);
      }
    }

    return result;
  }
};