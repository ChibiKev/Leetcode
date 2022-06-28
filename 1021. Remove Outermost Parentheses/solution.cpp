class Solution {
public:
  string removeOuterParentheses(string s) {
    vector<char> stack;
    string result = "";
    for (int index = 0; index < s.size(); index++){
      char character = s[index];
      if (stack.size() == 0){
        stack.push_back(character);
      }
      else{
        if (character == '('){
          stack.push_back('(');
          result += "(";
        }
        else{
          stack.pop_back();
          if (stack.size() != 0){
            result += ")";
          }
        }
      }
    }
    return result;
  }
};