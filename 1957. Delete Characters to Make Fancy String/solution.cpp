class Solution {
public:
  string makeFancyString(string s) {
    string result = "";
    
    for (int index = 0; index < s.size(); index++){
      char letter = s[index];
      if (result.size() > 1 && result[result.size() - 2] == result[result.size() - 1] && result[result.size() - 1] == letter){
        continue;        
      }
      result += letter;
    }
    
    return result;
  }
};