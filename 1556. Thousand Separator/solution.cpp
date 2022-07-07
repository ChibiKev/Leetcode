class Solution {
public:
  string thousandSeparator(int n) {
    if (n < 1000){
      return to_string(n);
    }

    string result = "";
    int count = 0;
    while (n > 0){
      if (count == 3){
        result = '.' + result;
        count = 0;
      }
      else{
        result = to_string(n % 10) + result;
        n /= 10;
        count += 1;
      }
    }

    return result;
  }
};