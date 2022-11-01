class Solution {
public:
  int mostFrequentEven(vector<int>& nums) {
    unordered_map<int, int> dictionary;
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      dictionary[num]++;
    }
    
    int minimumValue = -1;
    int maximumFrequency = 0;

    for (auto num : dictionary){
      if (num.first % 2 == 0){
        if (num.second > maximumFrequency){
          minimumValue = num.first;
          maximumFrequency = num.second;
        }
        else if (num.second == maximumFrequency){
          if (num.first < minimumValue){
            minimumValue = num.first;
          }
        }
      }
    }

    return minimumValue;
  }
};