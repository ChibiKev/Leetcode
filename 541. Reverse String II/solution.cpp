class Solution {
public:
  string reverseStr(string s, int k) {
    string result = "";
    bool reversed = true;
    int start = 0;
    while (start < s.size()){
      if (reversed){
        string newString = s.substr(start, k);
        reverse(newString.begin(), newString.end());
        result += newString;
      }
      else{
        result += s.substr(start, k);
      }
      reversed = !reversed;
      start += k;
    }

    return result;
  }
};