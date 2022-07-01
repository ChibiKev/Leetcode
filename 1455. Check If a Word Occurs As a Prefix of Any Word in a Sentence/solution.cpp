class Solution {
public:
  int isPrefixOfWord(string sentence, string searchWord) {
    int word = 1;
    int search = 0;
    bool jump = false;

    for (int index = 0; index < sentence.size(); index++){
      char letter = sentence[index];
      if (jump && letter != ' '){
        continue;
      }
      else if (letter == ' '){
        jump = false;
        search = 0;
        word += 1;
        continue;
      }
      if (letter == searchWord[search]){
        search += 1;
      }
      else{
        jump = true;
        search = 0;
      }
      if (search == searchWord.size()){
        return word;
      }
    }

    return -1;
  }
};