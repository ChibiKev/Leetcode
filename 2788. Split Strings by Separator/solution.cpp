class Solution {
public:
  vector<string> splitWordsBySeparator(vector<string>& words, char separator) {
    vector<string> result;
    for (int index = 0; index < words.size(); index++){
      string word = words[index];
      vector<string> splitWord;
      string tempWord = "";
      for (int index2 = 0; index2 < word.size(); index2++){
        char letter = word[index2];
        if (letter != separator){
          tempWord += letter;
        }
        if (letter == separator || index2 == word.size() - 1){
          splitWord.push_back(tempWord);
          tempWord = "";
        }
      }

      for (int index2 = 0; index2 < splitWord.size(); index2++){
        string split = splitWord[index2];
        if (split.size() != 0){
          result.push_back(split);
        }
      }
    }
    return result;
  }
};