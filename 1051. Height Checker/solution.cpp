class Solution {
public:
  int heightChecker(vector<int>& heights) {
    vector<int> sortedHeights = heights;
    sort(sortedHeights.begin(), sortedHeights.end());
    int result = 0;
    for (int index = 0; index < heights.size(); index++){
      if (sortedHeights[index] != heights[index]){
        result += 1;
      }
    }

    return result;
  }
};