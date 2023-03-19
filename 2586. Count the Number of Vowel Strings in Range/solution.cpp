class Solution {
public:
  int vowelStrings(vector<string>& words, int left, int right) {
    unordered_set<char> vowels = {'a', 'e', 'i', 'o', 'u'};
    int count = 0;
    for (int index = left; index < right + 1; index++){
      string word = words[index];
      if (vowels.count(word[0]) == 1 && vowels.count(word[word.size() - 1]) == 1){
        count += 1;
      }
    }
    return count;
  }
};