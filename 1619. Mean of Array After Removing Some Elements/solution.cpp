class Solution {
public:
  double trimMean(vector<int>& arr) {
    int fivePercent = arr.size() / 20;
    vector<int> adjustedArr = arr;
    sort(adjustedArr.begin(), adjustedArr.end());
    int totalSum = 0;
    for (int index = fivePercent; index < adjustedArr.size() - fivePercent; index++){
      int num = adjustedArr[index];
      totalSum += num;
    }

    return (double) totalSum / (adjustedArr.size() - (2 * fivePercent));
  }
};