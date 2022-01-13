class Solution {
public:
  char nextGreatestLetter(vector<char>& letters, char target) {
    if (target >= letters[letters.size() - 1]){
      return letters[0];
    }

    for (int i = 0; i < letters.size(); i++){
      char letter = letters[i];
      if (target < letter){
        return letter;
      }
    }
    return letters[0];
  }
};