class Solution {
public:
  int minStartValue(vector<int>& nums) {
    int start = 1;
    int total = start;
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      total += num;
      if (total < 1){
        int missing = 1 - total;
        start += missing;
        total += missing;
      }
    }

    return start;
  }
};