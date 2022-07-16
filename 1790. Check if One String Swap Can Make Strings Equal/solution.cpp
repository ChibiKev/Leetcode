class Solution {
public:
  bool areAlmostEqual(string s1, string s2) {
    vector<int> different;
    for (int index = 0; index < s1.size(); index++){
      if (s1[index] != s2[index]){
        different.push_back(index);
      }
      if (different.size() > 2){
        return false;
      }
    }
    return different.size() == 0 || (different.size() == 2 && s1[different[0]] == s2[different[1]] && s1[different[1]] == s2[different[0]]);
  }
};