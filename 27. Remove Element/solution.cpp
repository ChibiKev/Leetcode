class Solution {
public:
  int removeElement(vector<int>& nums, int val) {
    sort(nums.begin(), nums.end());
    int count = 0;
    for (int index = 0; index < nums.size(); index++){
      if (nums[index] != val){
        nums[count] = nums[index];
        count += 1;
      }
    }
    return count;
  }
};