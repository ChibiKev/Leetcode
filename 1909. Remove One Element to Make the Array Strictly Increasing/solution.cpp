class Solution {
public:
  bool canBeIncreasing(vector<int>& nums) {
    bool found = false;
    int last = 0;
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      if (last < num){
        last = num;
      }
      else{
        if (found){
          return false;
        }
        if (index == 1 || nums[index - 2] < num){
          last = num;
        }
        found = true;
      }
    }

    return true;
  }
};