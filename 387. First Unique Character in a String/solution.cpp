class Solution {
public:
  int firstUniqChar(string s) {
    unordered_map<char, int> dictionary;
    for (int index = 0; index < s.size(); index++){
      char letter = s[index];
      dictionary[letter]++;
    }

    for (int index = 0; index < s.size(); index++){
      char letter = s[index];
      if (dictionary[letter] == 1){
        return index;
      }
    }

    return -1;
  }
};