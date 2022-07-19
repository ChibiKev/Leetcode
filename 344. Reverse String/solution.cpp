class Solution {
public:
  void reverseString(vector<char>& s) {
    int left = 0;

    while (left < (s.size() / 2)){
      char temp = s[left];
      s[left] = s[s.size() - 1 - left];
      s[s.size() - 1 - left] = temp;
      left += 1;
    }
  }
};