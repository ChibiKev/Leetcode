class Solution {
public:
  bool checkAlmostEquivalent(string word1, string word2) {
    unordered_map<char, int> dictionary;
    for (int index = 0; index < word1.size(); index++){
      char letter = word1[index];
      dictionary[letter]++;
    }

    for (int index = 0; index < word2.size(); index++){
      char letter = word2[index];
      dictionary[letter]--;
    }

    for (auto letter : dictionary){
      if (abs(letter.second) > 3){
        return false;
      }
    }

    return true;
  }
};