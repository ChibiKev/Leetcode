class Solution {
public:
  bool isCircularSentence(string sentence) {
    vector<string> words;
    string word = "";
    for (int index = 0; index < sentence.size(); index++){
      char letter = sentence[index];
      if (letter != ' '){
        word += letter;
      }
      if (letter == ' ' || index == sentence.size() - 1){
        words.push_back(word);
        word = "";
      }
    }

    for (int index = 0; index < words.size(); index++){
      string word = words[index];
      char lastLetter = word[word.size() - 1];
      char firstLetter = words[(index + 1) % words.size()][0];
      if (lastLetter != firstLetter){
        return false;
      }
    }
    
    return true;
  }
};