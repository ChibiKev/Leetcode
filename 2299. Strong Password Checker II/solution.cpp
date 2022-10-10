class Solution {
public:
  bool strongPasswordCheckerII(string password) {
    if (password.size() < 8){
      return false;
    }

    bool upper = false;
    bool lower = false;
    bool digit = false;
    bool special = false;
    bool same = true;
    
    for (int index = 0; index < password.size(); index++){
      char value = password[index];
      if (value >= 'a' && value <= 'z'){
        lower = true;
      }
      if (value >= 'A' && value <= 'Z'){
        upper = true;
      }
      if (isdigit(value) != 0){
        digit = true;
      }
      if (isdigit(value) == 0 && isalnum(value) == 0){
        special = true;
      }
      if (index < password.size() - 1 && value == password[index + 1]){
        same = false;
      }
    }
    
    if (upper && lower && digit && special && same){
      return true;
    }
    return false;
  }
};