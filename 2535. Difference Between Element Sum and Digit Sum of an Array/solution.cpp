class Solution {
public:
  int differenceOfSum(vector<int>& nums) {
    int elementSum = 0;
    int digitSum = 0;
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      elementSum += num;
      while (num != 0){
        int digit = num % 10;
        num /= 10;
        digitSum += digit;
      }
    }
    return abs(elementSum - digitSum);
  }
};