class Solution {
public:
  int removePalindromeSub(string s) {
    string reversedS = s;
    reverse(reversedS.begin(), reversedS.end());
    
    if (s == ""){
      return 0;
    }
    else if (s == reversedS){
      return 1;
    }
    return 2;
  }
};