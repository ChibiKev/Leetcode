class Solution {
public:
  bool check(vector<int>& nums) {
    int found = 0;
    for (int index = 0; index < nums.size(); index++){
      if (nums[index] > nums[(index + 1) % nums.size()]){
        found += 1;
      }
      if (found > 1){
        return false;
      }
    }

    return true;
  }
};