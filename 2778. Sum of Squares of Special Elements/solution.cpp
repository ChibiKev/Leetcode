class Solution {
public:
  int sumOfSquares(vector<int>& nums) {
    int total = 0;
    int numsLength = nums.size();
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      if (numsLength % (index + 1) == 0){
        total += num * num;
      }
    }
    return total;
  }
};