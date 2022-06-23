class Solution {
public:
  int countGoodSubstrings(string s) {
    if (s.size() < 3){
      return 0;
    }

    int count = 0;
    string letters = s.substr(0, 2);
    for (int index = 2; index < s.size(); index++){
      letters += s[index];
      if (letters[0] != letters[1] && letters[1] != letters[2] && letters[2] != letters[0]){
        count += 1;
      }
      letters = letters.substr(1);
    }

    return count;
  }
};