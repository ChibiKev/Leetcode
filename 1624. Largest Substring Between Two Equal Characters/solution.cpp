class Solution {
public:
  int maxLengthBetweenEqualCharacters(string s) {
    vector<int> letters(26, 0);
    int maxCount = -1;
    for (int index = 0; index < s.size(); index++){
      char letter = s[index];
      int letterIndex = (int) letter - 97;
      if (letters[letterIndex] > 0){
        if (maxCount < index - letters[letterIndex]){
          maxCount = index - letters[letterIndex];
        }
      }
      else{
        letters[letterIndex] = index + 1;      
      }
    }

    return maxCount;
  }
};