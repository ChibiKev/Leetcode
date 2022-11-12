class Solution {
public:
  string oddString(vector<string>& words) {
    map<vector<int>, vector<string>> dictionary;
    string result = "";
    for (int index = 0; index < words.size(); index++){
      string word = words[index];
      vector<int> calc;
      for (int index2 = 1; index2 < word.size(); index2++){
        int difference = word[index2] - word[index2 - 1];
        calc.push_back(difference);
      }
      dictionary[calc].push_back(word);
    }

    for (auto num : dictionary){
      if (num.second.size() == 1){
        return num.second[0];
      }
    }

    return result;
  }
};