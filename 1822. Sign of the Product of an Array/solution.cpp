class Solution {
public:
  int arraySign(vector<int>& nums) {
    int product = 1;
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      if (num == 0){
        return 0;
      }
      else if (num < 0){
        product *= -1;
      }
    }
    return product;
  }
};