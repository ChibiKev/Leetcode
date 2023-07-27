class Solution {
public:
  int alternatingSubarray(vector<int>& nums) {
    int result = -1;
    int current = INT_MAX;

    int last = 0;
    int index = 1;
    while (index < nums.size()){
      int difference = nums[index] - nums[index - 1];
      if (difference == current * -1){
        current *= -1;
        if (index - last + 1 > result){
          result = index - last + 1;
        }
      }
      else if (difference == 1){
        current = difference;
        last = index - 1;
        if (index - last + 1 > result){
          result = index - last + 1;
        }
      }
      else{
        current = INT_MAX;
      }
      index += 1;
    }

    return result;
  }
};