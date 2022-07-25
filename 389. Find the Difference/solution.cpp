class Solution {
public:
  char findTheDifference(string s, string t) {
    sort(s.begin(), s.end());
    sort(t.begin(), t.end());
    
    for (int index = 0; index < s.size(); index++){
      char sLetter = s[index];
      char tLetter = t[index];
      if (sLetter != tLetter){
        return tLetter;
      }
    }

    return t[t.size() - 1];
  }
};