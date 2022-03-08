class Solution {
public:
  int getMinDistance(vector<int>& nums, int target, int start) {
    float result = INFINITY;
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      if (num == target){
        float newResult = abs(index - start);
        if (newResult < result){
          result = newResult;
          if (result == 0){
            break;
          }
        }
      }
    }

    return result;
  }
};