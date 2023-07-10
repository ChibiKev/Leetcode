class Solution {
public:
  int maximizeSum(vector<int>& nums, int k) {
    int maximum = 0;
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      if (maximum < num){
        maximum = num;
      }
    }
    
    int total = 0;
    for (int index = 0; index < k; index++){
      total += maximum + index;
    }
    return total;
  }
};