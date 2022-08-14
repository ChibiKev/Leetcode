class Solution {
public:
  string mostCommonWord(string paragraph, vector<string>& banned) {
    unordered_set<string> bannedSet = unordered_set<string>(banned.begin(),banned.end());
    unordered_map<string, int> dictionary = {};
    string word = "";

    for (int index = 0; index < paragraph.size(); index++){
      char letter = paragraph[index];
      if (letter != '!' && letter != '?' && letter != '\'' && letter != ',' && letter != ';' && letter != '.' && letter != ' '){
        word += tolower(letter);
      }
      if (letter == '!' || letter == '?' || letter == '\'' || letter == ',' || letter == ';' || letter == '.' || letter == ' '  || index == paragraph.size() - 1){
        if (word == ""){
          continue;
        }
        if (bannedSet.count(word) != 1){
          dictionary[word]++;
        }
        word = "";
      }
    }

    string maxKey = "";
    int maxValue = 0;
    
    for (auto word : dictionary){
      if (word.second > maxValue){
        maxKey = word.first;
        maxValue = word.second;
      }
    }

    return maxKey;
  }
};