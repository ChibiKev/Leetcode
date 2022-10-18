class Solution {
public:
  bool equalFrequency(string word) {
    vector<int> letters(26, 0);
    for (int index = 0; index < word.size(); index++){
      char letter = word[index];
      letters[(int) letter - 97] += 1;
    }
    
    for (int index = 0; index < word.size(); index++){
      char letter = word[index];
      letters[(int) letter - 97] -= 1;
      int amount = 0;
      bool missing = true;
      for (int index2 = 0; index2 < letters.size(); index2++){
        int value = letters[index2];
        if (value == 0){
          continue;
        }
        else if (amount == 0){
          amount = value;
        }
        else if (amount == value){
          continue;
        }
        else{
          missing = false;
          break;
        }
      }
      if (missing){
        return true;
      }
      letters[(int) letter - 97] += 1;
    }

    return false;
  }
};