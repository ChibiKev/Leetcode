class Solution {
public:
  int thirdMax(vector<int>& nums) {
    float max1 = -INFINITY;
    float max2 = -INFINITY;
    float max3 = -INFINITY;

    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      if (num == max1 || num == max2 || num == max3){
        continue;
      }
      if (num > max1){
        max3 = max2;
        max2 = max1;
        max1 = num;
      }
      else if (num > max2){
        max3 = max2;
        max2 = num;
      }
      else if (num > max3){
        max3 = num;
      }
    }

    int result = (int) max1;
    if (max3 != -INFINITY){
      result = (int) max3;
    }

    return result;
  }
};