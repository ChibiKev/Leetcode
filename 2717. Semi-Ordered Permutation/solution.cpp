class Solution {
public:
  int semiOrderedPermutation(vector<int>& nums) {
    int indexOne = 0;
    int indexN = nums.size() - 1;
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      if (num == 1){
        indexOne = index;
      }
      if (num == nums.size()){
        indexN = index;
      }
    }
    
    int total = (indexOne - 0) + (nums.size() - 1 - indexN);
    if (indexN < indexOne){
      total -= 1;
    }
    return total;
  }
};