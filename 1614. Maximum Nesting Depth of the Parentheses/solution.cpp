class Solution {
public:
  int maxDepth(string s) {
    int count = 0;
    int stack = 0;
    for (int index = 0; index < s.size(); index++){
      char character = s[index];
      if (character == '('){
        stack += 1;
      }
      else if (character == ')'){
        stack -= 1;
      }
      if (stack > count){
        count = stack;
      }
    }
    return count;
  }
};