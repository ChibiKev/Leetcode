class Solution {
public:
  bool isPalindrome(int x) {
    if (x < 0){
      return false;
    }
    
    long reverseX = 0;
    int xCopy = x;
    while (xCopy > 0){
      int lastDigit = xCopy % 10;
      reverseX = reverseX * 10 + lastDigit;
      xCopy = xCopy / 10;
    }

    return x == reverseX;
  }
};