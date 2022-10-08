class Solution {
public:
  vector<string> divideString(string s, int k, char fill) {
    vector<string> result;
    string word = "";
    for (int index = 0; index < s.size(); index++){
      char letter = s[index];
      word += letter;
      if (word.size() == k){
        result.push_back(word);
        word = "";
      }
    }

    if (word.size() != 0){
      for (int index = word.size(); index < k; index++){
        word += fill;
        if (word.size() == k){
          result.push_back(word);
        }
      }
    }

    return result;
  }
};