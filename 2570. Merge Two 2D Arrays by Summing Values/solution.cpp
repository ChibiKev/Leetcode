class Solution {
public:
  vector<vector<int>> mergeArrays(vector<vector<int>>& nums1, vector<vector<int>>& nums2) {
    map<int, int> dictionary;
    for (int index = 0; index < nums1.size(); index++){
      vector<int> nums = nums1[index];
      int key = nums[0];
      int value = nums[1];
      dictionary[key] = dictionary[key] + value;
    }

    for (int index = 0; index < nums2.size(); index++){
      vector<int> nums = nums2[index];
      int key = nums[0];
      int value = nums[1];
      dictionary[key] = dictionary[key] + value;
    }

    vector<vector<int>> result;

    for (auto item : dictionary){
      result.push_back({item.first, item.second});
    }
    
    return result;
  }
};