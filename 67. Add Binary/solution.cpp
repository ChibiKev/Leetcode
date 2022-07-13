class Solution {
public:
  string addBinary(string a, string b) {
    string result = "";
    int aIndex = a.size() - 1;
    int bIndex = b.size() - 1;
    int carry = 0;
    while (aIndex > -1 || bIndex > -1){
      int total = carry;
      if (aIndex > -1){
        total += a[aIndex] - '0';
      }
      if (bIndex > -1){
        total += b[bIndex] - '0';
      }
      aIndex -= 1;
      bIndex -= 1;
      if (total > 1){
        carry = 1;
      }
      else{
        carry = 0;
      }
      result += to_string(total % 2);
    }

    if (carry != 0){
      result += to_string(carry);
    }
    reverse(result.begin(), result.end());
    return result;
  }
};