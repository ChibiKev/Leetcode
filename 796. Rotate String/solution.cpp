class Solution {
public:
  bool rotateString(string s, string goal) {
    if (s.size() != goal.size()){
      return false;
    }

    for (int index = 0; index < s.size(); index++){
      if (s == goal){
        return true;
      }
      s = s.substr(1, s.size()) + s[0];
    }

    return false;
  }
};