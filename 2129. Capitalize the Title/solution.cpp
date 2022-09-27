class Solution {
public:
  string capitalizeTitle(string title) {
    vector<string> words;
    string word = "";
    for (int index = 0; index < title.size(); index++){
      char letter = title[index];
      if (letter != ' '){
        word += letter;
      }
      if (letter == ' ' || index == title.size() - 1){
        words.push_back(word);
        word = "";
      }
    }

    for (int index = 0; index < words.size(); index++){
      string word = words[index];
      if (word.size() > 2){
        for (int index2 = 0; index2 < word.size(); index2++){
          if (index2 == 0){
            word[index2] = toupper(word[index2]);            
          }
          else{
            word[index2] = tolower(word[index2]);
          }
        }
        words[index] = word;
      }
      else{
        for (int index2 = 0; index2 < word.size(); index2++){
          word[index2] = tolower(word[index2]);
        }
        words[index] = word;      
      }
    }
    
    string result = "";
    for (int index = 0; index < words.size(); index++){
      result += words[index];
      if (index != words.size() - 1){
        result += " ";
      }
    }
    return result;
  }
};