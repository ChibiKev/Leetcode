class Solution {
public:
  int minOperations(vector<int>& nums) {
    int total = 0;
    int last = 0;
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      if (num <= last){
        total += (last - num) + 1;
        num = last + 1;
      }
      last = num;
    }
    return total;
  }
};