class Solution {
public:
  string greatestLetter(string s) {
    unordered_set<char> mySet = unordered_set<char>(s.begin(),s.end());

    char lowercaseLetter = 'z';
    char uppercaseLetter = 'Z';

    for (int index = 0; index < 26; index++){
      if (mySet.count((char) ((int) uppercaseLetter - index)) == 1 && mySet.count((char) ((int) lowercaseLetter - index)) == 1){
        return string(1, (char) ((int) uppercaseLetter - index));
      }
    }

    return "";
  }
};