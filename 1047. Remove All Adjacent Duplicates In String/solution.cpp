class Solution {
public:
  string removeDuplicates(string s) {
    string result;
    for (int index = 0; index < s.size(); index++){
      char letter = s[index];
      if (result.size() != 0 && letter == result.back()){
        result.pop_back();
      }
      else{
        result.push_back(letter);        
      }
    }
    return result;
  }
};