class Solution {
public:
  int longestAlternatingSubarray(vector<int>& nums, int threshold) {
    int result = 0;
    int last = INT_MAX;

    int index = 0;
    while (index < nums.size()){
      if (nums[index] > threshold || (index > 0 && nums[index] % 2 == nums[index - 1] % 2)){
        if (result < index - last){
          result = index - last;
        }
        last = INT_MAX;
      }
      if (last == INT_MAX && nums[index] <= threshold && nums[index] % 2 == 0){
        last = index;
      }
      index += 1;
    }
    
    if (result < index - last){
      result = index - last;
    }

    return result;
  }
};