class Solution {
public:
  bool repeatedSubstringPattern(string s) {
    string newS = s + s;
    return newS.substr(1, newS.size() - 2).find(s) != -1;
  }
};