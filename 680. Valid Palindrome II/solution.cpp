class Solution {
public:
  bool validPalindrome(string s) {
    int start = 0;
    int end = s.size() - 1;

    while (start < end){
      if (s[start] != s[end]){
        string firstCheck = s.substr(start, end - start);
        string secondCheck = s.substr(start + 1, end - start);
        string firstCheckReversed = firstCheck;
        reverse(firstCheckReversed.begin(), firstCheckReversed.end());
        string secondCheckReversed = secondCheck;
        reverse(secondCheckReversed.begin(), secondCheckReversed.end());
        return firstCheck == firstCheckReversed || secondCheck == secondCheckReversed;
      }
      start += 1;
      end -= 1;
    }

    return true;
  }
};