class Solution {
public:
  bool isSubsequence(string s, string t) {
    int sIndex = 0;

    for (int index = 0; index < t.size(); index++){
      char letter = t[index];
      if (sIndex == s.size()){
        return true;
      }
      if (s[sIndex] == letter){
        sIndex += 1;
      }
    }

    return sIndex == s.size();
  }
};