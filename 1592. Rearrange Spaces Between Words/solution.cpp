class Solution {
public:
  string reorderSpaces(string text) {
    vector<string> words;
    string word = "";
    int spaces = 0;
    for (int index = 0; index < text.size(); index++){
      char letter = text[index];
      if (letter != ' '){
        word += letter;
      }
      else{
        spaces += 1;
      }
      if ((letter == ' ' || index == text.size() - 1) && word.size() > 0){
        words.push_back(word);
        word = "";
      }
    }

    int gap = 0;
    if (words.size() != 1){
      gap = spaces / (words.size() - 1);    
    }
    
    int extraSpaces = spaces - gap * (words.size() - 1);
    
    string spacesBetween = "";
    for (int index = 0; index < gap; index++){
      spacesBetween += " ";
    }
    
    string endingSpaces = "";
    for (int index = 0; index < extraSpaces; index++){
      endingSpaces += " ";
    }

    string result = "";
    for (int index = 0; index < words.size(); index++){
      string word = words[index];
      result += word;
      if (index != words.size() - 1){
        result += spacesBetween;
      }
      else{
        result += endingSpaces;
      }
    }

    return result;
  }
};