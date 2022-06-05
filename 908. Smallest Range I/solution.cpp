class Solution {
public:
  int smallestRangeI(vector<int>& nums, int k) {
    int maximum = INT_MIN;
    int minimum = INT_MAX;
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      if (num < minimum){
        minimum = num;
      }
      if (num > maximum){
        maximum = num;
      }
    }

    if (maximum - minimum > k * 2){
      return maximum - minimum - k * 2;
    }
    return 0;
  }
};