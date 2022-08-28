class Solution {
public:
  int maxRepeating(string sequence, string word) {
    int count = 0;
    int maxCount = 0;
    int index = 0;
    while (index < sequence.size()){
      if (index + word.size() > sequence.size()){
        break;
      }
      if (sequence.substr(index, word.size()) == word){
        count += 1;
        index += word.size();
        if (count > maxCount){
          maxCount = count;
        }
      }
      else{
        index += 1;
        count = 0;
      }
    }

    index = sequence.size();
    count = 0;

    while (index > -1){
      if (index - (int) word.size() < 0){
        break;
      }
      if (sequence.substr(index - (int) word.size(), word.size()) == word){
        count += 1;
        index -= word.size();
        if (count > maxCount){
          maxCount = count;
        }
      }
      else{
        index -= 1;
        count = 0;
      }
    }

    return maxCount;
  }
};