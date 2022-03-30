class Solution {
public:
  int maximumDifference(vector<int>& nums) {
    int difference = -1;
    int minValue = nums[0];
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      if (minValue > num){
        minValue = num;
      }
      else if (minValue < num){
        int newDifference = num - minValue;
        if (difference < newDifference){
          difference = newDifference;
        }
      }
    }
    return difference;
  }
};