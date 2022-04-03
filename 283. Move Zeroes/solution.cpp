class Solution {
public:
  void moveZeroes(vector<int>& nums) {
    vector<int> zeros;

    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      if (num == 0){
        zeros.push_back(index);
        continue;
      }
      if (zeros.size() == 0){
        continue;
      }
      nums[zeros[0]] = num;
      zeros.erase(zeros.begin());
      zeros.push_back(index);
    }

    for (int index = 0; index < zeros.size(); index++){
      int zero = zeros[index];
      nums[zero] = 0;
    }
  }
};