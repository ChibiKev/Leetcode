class Solution {
public:
  vector<bool> prefixesDivBy5(vector<int>& nums) {
    int current = 0;
    vector<bool> result;

    for(int i = 0; i < nums.size(); i++){
      current = (current * 2 + nums[i]) % 5;
      result.push_back(current == 0);
    }

    return result;
  }
};