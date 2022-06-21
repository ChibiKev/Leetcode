class Solution {
public:
  vector<string> removeAnagrams(vector<string>& words) {
    vector<string> newWords;
    for (int index = 0; index < words.size(); index++){
      string word = words[index];
      sort(word.begin(), word.end());
      newWords.push_back(word);
    }

    vector<string> result {words[0]};
    for (int index = 1; index < newWords.size(); index++){
      string word = newWords[index];
      if (word != newWords[index - 1]){
        result.push_back(words[index]);
      }
    }

    return result;
  }
};