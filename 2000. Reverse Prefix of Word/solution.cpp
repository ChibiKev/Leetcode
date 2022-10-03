class Solution {
public:
  string reversePrefix(string word, char ch) {
    for (int index = 0; index < word.size(); index++){
      char letter = word[index];
      if (letter == ch){
        string reverseWord = word.substr(0, index + 1);
        reverse(reverseWord.begin(), reverseWord.end());
        return reverseWord + word.substr(index + 1);      
      }
    }

    return word;
  }
};