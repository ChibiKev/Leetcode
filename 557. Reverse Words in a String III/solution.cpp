class Solution {
public:
  string reverseWords(string s) {
    string result = "";
    string word = "";
    for (int index = 0; index < s.size(); index++){
      char letter = s[index];
      if (letter != ' '){
        word = letter + word;
      }
      if (letter == ' ' || index == s.size() - 1){
        result += word;
        if (index != s.size() - 1){
          result += " ";
        }
        word = "";
      }
    }

    return result;
  }
};