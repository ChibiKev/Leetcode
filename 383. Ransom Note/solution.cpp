class Solution {
public:
  bool canConstruct(string ransomNote, string magazine) {
    unordered_map<char, int> dictionary;
    for (int index = 0; index < magazine.size(); index++){
      char letter = magazine[index];
      dictionary[letter]++;
    }

    for (int index = 0; index < ransomNote.size(); index++){
      char letter = ransomNote[index];
      if (dictionary[letter] > 0){
        dictionary[letter] -= 1;
      }
      else{
        return false;
      }
    }

    return true;
  }
};