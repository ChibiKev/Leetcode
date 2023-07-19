class Solution {
public:
  int minimizedStringLength(string s) {
    unordered_set<char> mySet = unordered_set<char>(s.begin(), s.end());
    return mySet.size();
  }
};