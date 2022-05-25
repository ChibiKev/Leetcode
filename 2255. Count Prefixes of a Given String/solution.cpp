class Solution {
public:
  int countPrefixes(vector<string>& words, string s) {
    int count = 0;
    for (int index = 0; index < words.size(); index++){
      string word = words[index];
      if (word == s.substr(0, word.size())){
        count += 1;
      }
    }

    return count;
  }
};