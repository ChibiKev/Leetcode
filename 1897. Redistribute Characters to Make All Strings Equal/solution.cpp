class Solution {
public:
  bool makeEqual(vector<string>& words) {
    unordered_map<char, int> dictionary;
    for (int index = 0; index < words.size(); index++){
      string word = words[index];
      for (int index2 = 0; index2 < word.size(); index2++){
        char letter = word[index2];
        dictionary[letter]++;
      }
    }
    
    for (auto letter : dictionary){
      if (letter.second % words.size() != 0){
        return false;
      }
    }

    return true;
  }
};