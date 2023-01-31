class Solution {
public:
  int removeDuplicates(vector<int>& nums) {
    int unique = 1;
    for (int index = 1; index < nums.size(); index++){
      if (nums[index] != nums[index - 1]){
        nums[unique] = nums[index];
        unique += 1;
      }
    }
    return unique;
  }
};