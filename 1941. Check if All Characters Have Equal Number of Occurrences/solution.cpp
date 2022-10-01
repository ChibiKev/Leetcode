class Solution {
public:
  bool areOccurrencesEqual(string s) {
    unordered_map<char, int> dictionary;
    for (int index = 0; index < s.size(); index++){
      char letter = s[index];
      dictionary[letter]++;
    }

    int amount = dictionary[s[0]];
    for (auto letter : dictionary){
      if (letter.second != amount){
        return false;
      }
    }

    return true;
  }
};