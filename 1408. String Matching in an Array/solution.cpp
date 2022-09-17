class Solution {
public:
  vector<string> stringMatching(vector<string>& words) {
    vector<string> result;
    for (int index = 0; index < words.size(); index++){
      for (int index2 = 0; index2 < words.size(); index2++){
        if (words[index] != words[index2] && words[index2].find(words[index]) != -1){
          result.push_back(words[index]);
          break;
        }
      }
    }

    return result;
  }
};