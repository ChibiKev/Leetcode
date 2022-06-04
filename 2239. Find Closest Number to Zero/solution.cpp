class Solution {
public:
  int findClosestNumber(vector<int>& nums) {
    int result = nums[0];
    for (int index = 1; index < nums.size(); index++){
      int num = nums[index];
      if (abs(num) < abs(result)){
        result = num;
      }
      else if (abs(num) == abs(result)){
        if (num > result){
          result = num;
        }
      }
    }
    return result;
  }
};