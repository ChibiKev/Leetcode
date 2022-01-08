class Solution {
public:
  bool isValid(string s) {
    vector<char> stack;

    for(int i = 0; i < s.length(); i++){
      char bracket = s[i];
      if(bracket == '(' || bracket == '['|| bracket == '{'){
        stack.push_back(bracket);
      }
      else if(stack.size() == 0){
        return false;
      }
      else if(bracket == ')' && stack[stack.size() - 1] == '('){
        stack.pop_back();
      }
      else if(bracket == ']' && stack[stack.size() - 1] == '['){
        stack.pop_back();
      }
      else if(bracket == '}' && stack[stack.size() - 1] == '{'){
        stack.pop_back();
      }
      else{
        return false;
      }
    }

    return stack.size() == 0;
  }
};