class Solution {
public:
  bool backspaceCompare(string s, string t) {
    string newS = "";
    for (int index = 0; index < s.size(); index++){
      char letter = s[index];
      if (letter != '#'){
        newS += letter;
      }
      else{
        newS = newS.substr(0, newS.size() - 1);
      }
    }

    string newT = "";
    for (int index = 0; index < t.size(); index++){
      char letter = t[index];
      if (letter != '#'){
        newT += letter;
      }
      else{
        newT = newT.substr(0, newT.size() - 1);
      }
    }

    return newS == newT;
  }
};