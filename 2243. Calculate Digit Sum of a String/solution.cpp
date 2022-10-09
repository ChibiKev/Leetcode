class Solution {
public:
  string digitSum(string s, int k) {
    string result = "";
    while(s.size() > k){
      int total = 0;
      for (int index = 0; index < s.size(); index++){
        char value = s[index];
        if (index != 0 && index % k == 0){
          result += to_string(total);
          total = 0;
        }
        total += (int) value - 48;
      }
      result += to_string(total);
      s = result;
      result = "";
    }

    return s;
  }
};