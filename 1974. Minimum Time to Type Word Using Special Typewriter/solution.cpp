class Solution {
public:
  int minTimeToType(string word) {
    int result = word.size();
    char point = 'a';
    
    for (int index = 0; index < word.size(); index++){
      char letter = word[index];
      int minimum = abs(((int) point - 97) - ((int) letter - 97));
      if (26 - abs(((int) point - 97) - ((int) letter - 97)) < minimum){
        minimum = 26 - abs(((int) point - 97) - ((int) letter - 97));
      }
      result += minimum;
      point = letter;
    }

    return result;
  }
};