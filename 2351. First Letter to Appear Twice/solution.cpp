class Solution {
public:
  char repeatedCharacter(string s) {
    unordered_set<char> mySet;
    for (int index = 0; index < s.size(); index++){
      char letter = s[index];
      if (mySet.count(letter) == 1){
        return letter;
      }
      else{
        mySet.insert(letter);
      }
    }
    return '0';
  }
};