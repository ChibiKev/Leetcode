class Solution {
public:
  string sortSentence(string s) {
    vector<string> sList;
    string word = "";
    for (int index = 0; index < s.size(); index++){
      char letter = s[index];
      if (letter != ' '){
        word += letter;
      }
      if (letter == ' ' || index == s.size() - 1){
        sList.push_back(word);
        word = "";
      }
    }
    
    vector<string> result(sList.size(), "");

    for (int index = 0; index < sList.size(); index++){
      string word = sList[index];
      int index2 = (word[word.size() - 1] - '0') - 1;
      result[index2] = word.substr(0, word.size() - 1);
    }

    string finalResult;
    for (int index = 0; index < result.size(); index++){
      finalResult += result[index];
      if (index != result.size() - 1){
        finalResult += " ";
      }
    }
    return finalResult;
  }
};