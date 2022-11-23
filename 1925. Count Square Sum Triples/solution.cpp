class Solution {
public:
  int countTriples(int n) {
    int result = 0;

    for (int a = 1; a < n; a++){
      for (int b = a + 1; b < n; b++){
        double c = sqrt((a * a) + (b * b));
        if ((int) c == c && c <= n){
          result += 2;
        }
      }
    }

    return result;
  }
};