class Solution {
public:
  string mergeAlternately(string word1, string word2) {
    string result = "";
    int word1Index = 0;
    int word2Index = 0;
    while (word1Index < word1.size() || word2Index < word2.size()){
      if (word1Index < word1.size()){
        result += word1[word1Index];
      }
      if (word2Index < word2.size()){
        result += word2[word2Index];
      }
      word1Index += 1;
      word2Index += 1;
    }

    return result;
  }
};