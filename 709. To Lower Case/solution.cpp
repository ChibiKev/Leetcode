class Solution {
public:
  string toLowerCase(string s) {
    string newS = "";
    for (int index = 0; index < s.size(); index++){
      newS += tolower(s[index]);
    }
    return newS;
  }
};