class Solution {
public:
  int findContentChildren(vector<int>& g, vector<int>& s) {
    sort(g.begin(), g.end());
    sort(s.begin(), s.end());
    int childrenIndex = 0;
    int count = 0;
    for (int i = 0; i < s.size(); i++){
      int cookies = s[i];
      if (childrenIndex >= g.size()){
        break;
      }
      if (g[childrenIndex] <= cookies){
        count += 1;
        childrenIndex += 1;
      }
    }

    return count;
  }
};