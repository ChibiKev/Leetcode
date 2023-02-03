class Solution {
public:
  int lengthOfLastWord(string s) {
    int count = 0;
    int index = s.size() - 1;
    while (index > -1){
      if (s[index] == ' ' && count > 0){
        break;
      }
      if (s[index] != ' '){
        count += 1;
      }
      index -= 1;
    }
    return count;
  }
};