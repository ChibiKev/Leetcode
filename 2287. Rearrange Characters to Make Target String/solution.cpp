class Solution {
public:
  int rearrangeCharacters(string s, string target) {
    if (target.size() > s.size()){
      return 0;
    }

    unordered_map<char,int> sDictionary;
    for (int index = 0; index < s.size(); index++){
      char letter = s[index];
      sDictionary[letter]++;
    };

    unordered_map<char,int> targetDictionary;
    for (int index = 0; index < target.size(); index++){
      char letter = target[index];
      targetDictionary[letter]++;
    };

    int result = INT_MAX;
    for (auto letter : targetDictionary){
      if (sDictionary[letter.first] != NULL){
        result = min(result, sDictionary[letter.first] / letter.second);
      }
      else{
        return 0;      
      }
    }

    return result;
  }
};