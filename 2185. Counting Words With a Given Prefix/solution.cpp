class Solution {
public:
  int prefixCount(vector<string>& words, string pref) {
    int count = 0;
    for (int index = 0; index < words.size(); index++){
      string word = words[index];
      string prefix = word.substr(0, pref.length());
      if (prefix == pref){
        count += 1;
      }
    }

    return count;
  }
};