class Solution {
public:
    string restoreString(string s, vector<int>& indices) {
      int size = s.size();
      string result = s;
      for (int i = 0; i < size; i++){
        result[indices[i]] = s[i];
      }
      return result;
    }
};