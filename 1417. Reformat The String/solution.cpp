class Solution {
public:
  string reformat(string s) {
    string digits = "";
    string alphas = "";

    for (int index = 0; index < s.size(); index++){
      char value = s[index];
      if (isdigit(value)){
        digits += value;
      }
      else if (isalpha(value)){
        alphas += value;
      }
    }

    string result = "";
    
    if (abs((int) digits.size() - (int) alphas.size()) > 1){
      return result;
    }
    else if (digits.size() > alphas.size()){
      for (int index = 0; index < digits.size(); index++){
        result += digits[index];
        if (index < alphas.size()){
          result += alphas[index];        
        }
      }
    }
    else{
      for (int index = 0; index < alphas.size(); index++){
        result += alphas[index];
        if (index < digits.size()){
          result += digits[index];
        }
      }
    }

    return result;
  }
};