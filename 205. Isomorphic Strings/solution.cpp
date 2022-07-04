class Solution {
public:
  bool isIsomorphic(string s, string t) {
    unordered_map<char, char> sDictionary;
    unordered_map<char, char> tDictionary;

    for (int index = 0; index < s.size(); index++){
      char sLetter = s[index];
      char tLetter = t[index];
      if (sDictionary.count(sLetter) == 1){
        if (sDictionary[sLetter] != tLetter){
          return false;        
        }
      }
      else{
        sDictionary[sLetter] = tLetter;
      }
      if (tDictionary.count(tLetter) == 1){
        if (tDictionary[tLetter] != sLetter){
          return false;        
        }
      }
      else{
        tDictionary[tLetter] = sLetter;      
      }
    }

    return true;
  }
};