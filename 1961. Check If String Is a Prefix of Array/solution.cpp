class Solution {
public:
  bool isPrefixString(string s, vector<string>& words) {
    string currentStructure = "";
    for (int i = 0; i < words.size(); i++){
      currentStructure += words[i];
      if (currentStructure == s){
        return true;
      }
      if (currentStructure.length() > s.length()){
        break;
      }
    }
    return false;
  }
};