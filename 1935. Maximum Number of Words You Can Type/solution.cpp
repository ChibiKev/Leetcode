class Solution {
public:
  int canBeTypedWords(string text, string brokenLetters) {
    unordered_set<int> letterSet = unordered_set<int>(brokenLetters.begin(),brokenLetters.end());
    int count = 0;
    bool word = false;
    for (int index = 0; index < text.size(); index++){
      char letter = text[index];
      if (word && letter != ' '){
        continue;
      }
      if (letterSet.count(letter) == 1){
        word = true;
      }
      if (letter == ' ' || index == text.size() - 1){
        if (word == false){
          count += 1;
        }
        word = false;
      }
    }

    return count;
  }
};