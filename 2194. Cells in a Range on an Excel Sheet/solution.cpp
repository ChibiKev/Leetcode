class Solution {
public:
  vector<string> cellsInRange(string s) {
    vector<string> result;

    for (char column = s[0]; column <= s[3]; column++){
      for (char row = s[1]; row <= s[4]; row++){
        result.push_back({column, row});
      }
    }

    return result;
  }
};