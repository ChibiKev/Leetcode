class Solution {
public:
  bool buddyStrings(string s, string goal) {
    if (s.size() != goal.size()){
      return false;    
    }
    unordered_set<char> sSet = unordered_set<char>(s.begin(), s.end());
    if (s == goal && sSet.size() < s.size()){
      return true;
    }

    vector<int> difference;
    for (int index = 0; index < s.size(); index++){
      if (s[index] != goal[index]){
        difference.push_back(index);
      }
    }

    return difference.size() == 2 && s[difference[0]] == goal[difference[1]] && s[difference[1]] == goal[difference[0]];
  }
};