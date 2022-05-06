class Solution {
public:
  int findLucky(vector<int>& arr) {
    unordered_map<int, int> dictionary;
    for (int index = 0; index < arr.size(); index++){
      int num = arr[index];
      dictionary[num]++;
    }
    
    int maxValue = -1;
    for (auto num : dictionary){
      if (num.first == num.second && num.second > maxValue){
        maxValue = num.second;
      }
    }
    return maxValue;
  }
};