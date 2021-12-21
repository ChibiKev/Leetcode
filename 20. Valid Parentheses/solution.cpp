class Solution {
public:
  bool isValid(string s) {
    vector<char> storage;
    for(int i = 0; i < s.length(); i++){
      if(s[i] == '{'){
        storage.push_back('}');
      }
      else if(s[i] == '('){
        storage.push_back(')');
      }
      else if(s[i] == '['){
        storage.push_back(']');
      }
      else{
        if(storage.size() == 0) return false;
        if(s[i] == storage[storage.size() - 1]){
          storage.pop_back();
        }
        else{
          return false;
        }
      }
    }
    if(storage.size() == 0){
      return true;
    }
    return false;
  }
};