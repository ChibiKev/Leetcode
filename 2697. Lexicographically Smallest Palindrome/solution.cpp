class Solution {
public:
  string makeSmallestPalindrome(string s) {
    string result = s;
    for (int index = 0; index < result.size() / 2; index++){
      char left = result[index];
      char right = result[result.size() - 1 - index];
      if (left < right){
        result[result.size() - 1 - index] = left;
      }
      else if (right < left){
        result[index] = right;
      }
    }
    return result;
  }
};