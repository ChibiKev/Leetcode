class Solution {
public:
  int balancedStringSplit(string s) {
    int count = 0;
    int result = 0;
    for (int index = 0; index < s.size(); index++){
      char letter = s[index];
      if (letter == 'R'){
        count += 1;
      }
      else{
        count -= 1;
      }
      if (count == 0){
        result += 1;
      }
    }
    return result;
  }
};