class Solution {
public:
  bool isAnagram(string s, string t) {
    if (s.size() != t.size()){
      return false;    
    }

    unordered_map<char, int> dictionary;
    for (int index = 0; index < s.size(); index++){
      char letter = s[index];
      dictionary[letter]++;
    }
    
    for (int index = 0; index < t.size(); index++){
      char letter = t[index];
      if (dictionary[letter] == NULL){
        return false;
      }
      else{
        if (dictionary[letter] > 0){
          dictionary[letter] -= 1;        
        }
        else{
          return false;        
        }
      }
    }

    return true;
  }
};