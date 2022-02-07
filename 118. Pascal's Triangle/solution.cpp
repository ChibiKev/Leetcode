class Solution {
public:
  vector<vector<int>> generate(int numRows) {
    vector<vector<int>> result {{1}};
    for (int number = 1; number < numRows; number++){
      vector<int> last = result[result.size() - 1];
      vector<int> storage = {1};
      for (int lastStart = 0; lastStart < last.size() - 1; lastStart++){
        storage.push_back(last[lastStart] + last[lastStart + 1]);
      }
      storage.push_back(1);
      result.push_back(storage);
    }
    return result;
  }
};