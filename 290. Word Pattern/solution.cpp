class Solution {
public:
  bool wordPattern(string pattern, string s) {
    vector<string> sList;
    string word = "";
    for (int index = 0; index < s.size(); index++){
      char letter = s[index];
      if (letter != ' '){
        word += letter;
      }
      if (letter == ' ' || index == s.size() - 1){
        sList.push_back(word);
        word = "";
      }
    }
    
    if (sList.size() != pattern.size()){
      return false;
    }

    unordered_map<string, string> patternDictionary;
    unordered_map<string, string> wordDictionary;

    for (int index = 0; index < sList.size(); index++){
      string word = sList[index];
      string letter (1, pattern[index]);
      if (patternDictionary.find(letter) != patternDictionary.end()){
        if (patternDictionary[letter] != word){
          return false;
        }
      }
      else{
        if (wordDictionary.find(word) != wordDictionary.end()){
          if (wordDictionary[word] != letter){
            return false;
          }
        }
        patternDictionary[letter] = word;
        wordDictionary[word] = letter;
      }
    }

    return true;
  }
};