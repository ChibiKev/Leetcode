class Solution {
public:
  bool checkString(string s) {
    string sortedS = s;
    sort(sortedS.begin(), sortedS.end());
    return sortedS == s;
  }
};