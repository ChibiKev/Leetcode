class Solution {
public:
  string toGoatLatin(string sentence) {
    unordered_set<char> vowels = {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'};
    
    vector<string> listOfWords;
    string word = "";
    for (int index = 0; index < sentence.size(); index++){
      char letter = sentence[index];
      if (letter != ' '){
        word += letter;
      }
      if (letter == ' ' || index == sentence.size() - 1){
        listOfWords.push_back(word);
        word = "";
      }
    }

    string newSentence = "";
    
    for (int index = 0; index < listOfWords.size(); index++){
      string words = listOfWords[index];
      if (vowels.count(words[0]) == 0){
        listOfWords[index] = words.substr(1, words.size() - 1) + words.substr(0,1);
      }
      listOfWords[index] += "ma" + string(index + 1, 'a');
      newSentence += listOfWords[index];
      if (index != listOfWords.size() - 1){
        newSentence += " ";
      }
    }
    
    return newSentence;
  }
};