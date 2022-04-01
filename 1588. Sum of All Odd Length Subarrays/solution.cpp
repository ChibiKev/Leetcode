class Solution {
public:
  int sumOddLengthSubarrays(vector<int>& arr) {
    int total = 0;
    int arrLength = arr.size();
    for (int index = 0; index < arr.size(); index++){
      int num = arr[index];
      int totalAdded = ((index + 1) * (arrLength - index) + 1) / 2;
      total += totalAdded * num;
    }
    return total;
  }
};