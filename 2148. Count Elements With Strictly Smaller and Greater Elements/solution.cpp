class Solution {
public:
  int countElements(vector<int>& nums) {
    int minimum = INT_MAX;
    int maximum = INT_MIN;
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      if (num > maximum){
        maximum = num;
      }
      if (num < minimum){
        minimum = num;
      }
    }

    int count = 0;
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      if (num < maximum && num > minimum){
        count += 1;
      }
    }

    return count;
  }
};