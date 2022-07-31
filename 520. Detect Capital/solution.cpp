class Solution {
public:
  bool detectCapitalUse(string word) {
    for (int index = 1; index < word.size(); index++){
      if (isupper(word[1]) != isupper(word[index]) || islower(word[0]) && isupper(word[index])){
        return false;
      }
    }
    return true;
  }
};