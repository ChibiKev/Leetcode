class Solution {
public:
  string generateTheString(int n) {
    string result (n - 1, 'a');
    if (n % 2 == 1){
      return result + 'a';
    }
    return result + 'b';
  }
};