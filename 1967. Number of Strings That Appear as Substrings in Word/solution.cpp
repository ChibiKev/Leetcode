class Solution {
public:
  int numOfStrings(vector<string>& patterns, string word) {
    int count = 0;
    for (int index = 0; index < patterns.size(); index++){
      string pattern = patterns[index];
      if (word.find(pattern) != -1){
        count += 1;
      }
    }

    return count;
  }
};