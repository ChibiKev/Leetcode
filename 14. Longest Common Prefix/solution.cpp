class Solution {
public:
  string longestCommonPrefix(vector<string>& strs) {
    sort(strs.begin(), strs.end());

    int lowestCount = strs[0].size();
    for (int index = 0; index < strs.size(); index++){
      string strings = strs[index];
      if (strings.size() < lowestCount){
        lowestCount = strings.size();
      }
    }
    
    string firstStr = strs[0];
    string lastStr = strs[strs.size() - 1];
    string prefix = "";
    for (int index = 0; index < lowestCount; index++){
      if (firstStr[index] == lastStr[index]){
        prefix += firstStr[index];
      }
      else{
        break;
      }
    }
    return prefix;
  }
};