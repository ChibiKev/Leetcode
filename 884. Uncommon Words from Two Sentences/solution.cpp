class Solution {
public:
  vector<string> uncommonFromSentences(string s1, string s2) {
    unordered_set<string> banned;
    unordered_set<string> uncommon;

    vector<string> s1Words;
    string word = "";
    for (int index = 0; index < s1.size(); index++){
      char letter = s1[index];
      if (letter != ' '){
        word += letter;
      }
      if (letter == ' ' || index == s1.size() - 1){
        s1Words.push_back(word);
        word = "";
      }
    }

    for (int index = 0; index < s1Words.size(); index++){
      string word = s1Words[index];
      if (uncommon.count(word) == 1){
        banned.insert(word);
        uncommon.erase(word);
      }
      else if (banned.count(word) == 0 && uncommon.count(word) == 0){
        uncommon.insert(word);      
      }
    }

    vector<string> s2Words;
    for (int index = 0; index < s2.size(); index++){
      char letter = s2[index];
      if (letter != ' '){
        word += letter;
      }
      if (letter == ' ' || index == s2.size() - 1){
        s2Words.push_back(word);
        word = "";
      }
    }

    for (int index = 0; index < s2Words.size(); index++){
      string word = s2Words[index];
      if (uncommon.count(word) == 1){
        banned.insert(word);
        uncommon.erase(word);
      }
      else if (banned.count(word) == 0 && uncommon.count(word) == 0){
        uncommon.insert(word);      
      }
    }
    
    vector<string> result(uncommon.begin(), uncommon.end());
    return result;
  }
};