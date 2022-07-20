class Solution {
public:
  vector<vector<int>> largeGroupPositions(string s) {
    vector<vector<int>> result;

    int count = 0;
    char lastLetter;
    int startIndex = 0;

    for (int index = 0; index < s.size(); index++){
      char letter = s[index];
      if (lastLetter == letter){
        count += 1;
        if (count >= 3 && index == s.size() - 1){
          result.push_back({startIndex, index});
        }
      }
      else{
        if (count >= 3){
          result.push_back({startIndex, index - 1});
        }
        lastLetter = letter;
        count = 1;
        startIndex = index;
      }
    }

    return result;
  }
};