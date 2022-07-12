class Solution {
public:
  string modifyString(string s) {
    for (int index = 0; index < s.size(); index++){
      if (s[index] == '?'){
        string word = "abc";
        for (int index2 = 0; index2 < word.size(); index2++){
          char character = word[index2];
          if ((index == 0 || s[index - 1] != character) && (index + 1 == s.size() || s[index + 1] != character)){
            s = s.substr(0, index) + character + s.substr(index + 1, s.size());
            break;
          }
        }
      }
    }
    return s;
  }
};