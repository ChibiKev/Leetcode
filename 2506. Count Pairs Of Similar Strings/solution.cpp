class Solution {
public:
  int similarPairs(vector<string>& words) {
    unordered_map<string, int> dictionary;
    for (int index = 0; index < words.size(); index++){
      string word = words[index];
      set<char> wordsSet = set<char>(word.begin(),word.end());
      string wordSorted = "";
      for (char letter : wordsSet){
        wordSorted += letter;
      }
      dictionary[wordSorted]++;
    }

    int result = 0;
    for (auto word : dictionary){
      int count = word.second;
      result += (count * (count - 1)) / 2;
    }
    return result;
  }
};