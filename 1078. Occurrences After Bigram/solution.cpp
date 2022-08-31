class Solution {
public:
  vector<string> findOcurrences(string text, string first, string second) {
    vector<string> words;
    string word = "";
    for (int index = 0; index < text.size(); index++){
      char letter = text[index];
      if (letter != ' '){
        word += letter;
      }
      if (letter == ' ' || index == text.size() - 1){
        words.push_back(word);
        word = "";
      }
    }
    
    vector<string> result;
    int index = 0;

    while (index + 2 < words.size()){
      if (words[index] == first){
        if (words[index + 1] == second){
          result.push_back(words[index + 2]);
          if (words[index + 1] == first && words[index + 2] == second){
            index += 0;
          }
          else if (words[index + 2] == first){
            index += 1;
          }
          else{
            index += 2;
          }
        }
      }
      index += 1;
    }

    return result;
  }
};