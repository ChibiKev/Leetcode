class Solution {
public:
  int minLength(string s) {
    vector<char> stack;
    for (int index = 0; index < s.size(); index++){
      char letter = s[index];
      if (letter == 'B' && stack.size() > 0 && stack[stack.size() - 1] == 'A'){
        stack.pop_back();
      }
      else if (letter == 'D' && stack.size() > 0 && stack[stack.size() - 1] == 'C'){
        stack.pop_back();
      }
      else{
        stack.push_back(letter);
      }
    }
    return stack.size();
  }
};