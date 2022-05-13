class Solution {
public:
  int smallestEqual(vector<int>& nums) {
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      if (index % 10 == num){
        return index;
      }
    }
    return -1;
  }
};