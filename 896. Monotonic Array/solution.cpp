class Solution {
public:
  bool isMonotonic(vector<int>& nums) {
    bool increase = false;
    bool decrease = false;

    for (int index = 0; index < nums.size() - 1; index++){
      if (nums[index] < nums[index + 1]){
        increase = true;
      }
      if (nums[index] > nums[index + 1]){
        decrease = true;
      }
    }

    if (increase && decrease){
      return false;
    }
    return true;
  }
};