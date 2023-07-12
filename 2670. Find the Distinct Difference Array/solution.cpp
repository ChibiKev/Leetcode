class Solution {
public:
  vector<int> distinctDifferenceArray(vector<int>& nums) {
    unordered_set<int> prefix;
    unordered_map<int, int> suffix;
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      suffix[num]++;
    }
    
    vector<int> result;

    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      prefix.insert(num);
      
      suffix[num] -= 1;
      if (suffix[num] == 0){
        suffix.erase(num);
      }
      
      result.push_back(prefix.size() - suffix.size());
    }

    return result;
  }
};